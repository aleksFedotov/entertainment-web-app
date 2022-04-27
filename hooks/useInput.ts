import React, { useReducer } from 'react';

enum InputActionType {
  INPUT = 'INPUT',
  BLUR = 'BLUR',
  RESET = 'RESET',
}

interface Action {
  type: InputActionType;
  value?: string;
}

interface State {
  value: string;
  isTouched: boolean;
}

const initialInputState: State = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: State, action: Action): State => {
  if (action.type === 'INPUT') {
    return { value: action.value!, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return initialInputState;
};

const useInput = (validateValue: (str: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: InputActionType.INPUT, value: event.target.value });
  };

  const inputBlurHandler = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: InputActionType.BLUR });
  };

  const reset = () => {
    dispatch({ type: InputActionType.RESET });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
