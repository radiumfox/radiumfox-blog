import { METHODS } from "@/classes/constants";

export const useFetching = () => {
  const config = useRuntimeConfig();
  const getData = (request: string) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: METHODS.GET,
    });
  };

  const postData = (request: string, data: any) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: METHODS.POST,
      body: data,
    });
  };

  const updateData = (request: string, data: any) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: METHODS.PUT,
      body: data,
    });
  };

  const deleteData = (request: string) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: METHODS.DELETE,
    });
  };

  return {
    getData,
    postData,
    updateData,
    deleteData,
  };
};
