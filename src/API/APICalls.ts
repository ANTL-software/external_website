import axios from "axios";

import type { AxiosResponse, AxiosError } from "axios";

interface IApiError {
  message: string;
  status?: number;
  code?: string;
}

const API_BASE_URL = "/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiError = (error: AxiosError): IApiError => {
  if (error.response) {
    const errorData = error.response.data as { message?: string } | undefined;
    return {
      message: errorData?.message || "Erreur du serveur",
      status: error.response.status,
      code: error.code,
    };
  } else if (error.request) {
    return {
      message: "Erreur de réseau - Impossible de joindre le serveur",
      code: error.code,
    };
  } else {
    return {
      message: error.message || "Erreur inconnue",
      code: error.code,
    };
  }
};

export const get = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(url);
    return response.data;
  } catch (error) {
    const apiError = handleApiError(error as AxiosError);
    console.error(`GET ${url} failed:`, apiError);
    throw apiError;
  }
};

export default apiClient;
