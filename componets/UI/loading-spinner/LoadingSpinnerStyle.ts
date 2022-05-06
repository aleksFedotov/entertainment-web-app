import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  &.overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
`;

export const SpinnerText = styled.p`
  color: var(--color-white);
`;

export const Spinner = styled.div`
  border: 10px solid var(--color-semi-dark-blue);
  border-top: 10px solid var(--color-red);
  border-radius: 100%;
  width: 44px;
  height: 44px;
  animation: ${rotate} 2s linear infinite;
`;
