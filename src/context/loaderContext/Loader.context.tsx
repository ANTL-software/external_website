import { createContext, useContext } from "react";

interface LoaderContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  setLoading: (loading: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useLoader(): LoaderContextType {
  const context = useContext(LoaderContext);
  
  if (!context) {
    throw new Error("useLoader doit être utilisé dans un LoaderProvider");
  }
  
  return context;
}

export default LoaderContext;