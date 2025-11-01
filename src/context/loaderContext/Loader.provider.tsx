import type { ReactElement, ReactNode } from "react";
import { useState, useCallback } from "react";
import LoaderContext from "./Loader.context";

interface LoaderProviderProps {
  children: ReactNode;
}

export default function LoaderProvider({ children }: LoaderProviderProps): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoader = useCallback(function (): void {
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(function (): void {
    setIsLoading(false);
  }, []);

  const setLoading = useCallback(function (loading: boolean): void {
    setIsLoading(loading);
  }, []);

  const contextValue = {
    isLoading,
    showLoader,
    hideLoader,
    setLoading,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
    </LoaderContext.Provider>
  );
}