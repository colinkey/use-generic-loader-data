import { useLoaderData } from "react-router-dom";

export function useGenericLoaderData<T>() {
  return useLoaderData() as T;
}
