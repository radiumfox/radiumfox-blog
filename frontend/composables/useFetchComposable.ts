export const $useFetch = (request: string, opts?: any) => {
    const config = useRuntimeConfig()

    return useFetch(request, { baseURL: config.public.baseURL, ...opts })
}