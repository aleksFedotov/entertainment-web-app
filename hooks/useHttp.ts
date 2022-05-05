import { abort } from 'process';
import { useState, useCallback, useRef, useEffect } from 'react';

interface IReqCongig {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: object | null;
}

type TUseHttpRes = {
  isLoading: boolean;
  error: any;
  sendRequest: (reqConfig: IReqCongig) => any;
  clearError: () => void;
};

const useHttp = (): TUseHttpRes => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async ({ url, method = 'GET', headers = {}, body = null }: IReqCongig) => {
      setIsLoading(true);
      setError(null);
      const httpAbortCtrl = new AbortController();

      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const res = await fetch(url, {
          method,
          headers,
          body: body !== null ? JSON.stringify(body) : null,
          signal: httpAbortCtrl.signal,
        });
        const resData = await res.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );
        if (!res.ok) {
          throw new Error(resData.message);
        }
        setIsLoading(false);
        return resData;
      } catch (error) {
        // @ts-ignore
        setError(error.message);
        setIsLoading(false);
        throw error;
      }
    },
    []
  );

  const clearError = (): void => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    clearError,
  };
};

export default useHttp;
