enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

export const useFetching = () => {
  const config = useRuntimeConfig()
  const getData = (request: string) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: Methods.Get,
    })
  }

  const postData = (request: string, data: any) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: Methods.Post,
      body: data,
    })
  }

  const updateData = (request: string, data: any) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: Methods.Put,
      body: data,
    })
  }

  const deleteData = (request: string) => {
    return useFetch(`${config.public.baseURL}${request}`, {
      baseURL: config.public.baseURL,
      method: Methods.Delete,
    })
  }

  return {
    getData,
    postData,
    updateData,
    deleteData,
  }
}
