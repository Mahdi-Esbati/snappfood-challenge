import { useEffect, useState } from 'react'
import httpService, { ApiRequestObject } from '@/utils/httpService'

type SuccessCallback<T> = (data: T) => void
type ErrorCallback = (error: unknown) => void

type UseAPIOptions<RequestType, ResponseType> = {
    apiRequestObject: ApiRequestObject<RequestType, ResponseType>
    onSuccess?: SuccessCallback<ResponseType>
    onError?: ErrorCallback
    fetchOnMount?: boolean
    requestData?: RequestType
}

function useAPI<RequestType, ResponseType>(
    options: UseAPIOptions<RequestType, ResponseType>
) {
    const {
        apiRequestObject,
        onSuccess,
        onError,
        fetchOnMount = false,
        requestData,
    } = options
    const [pending, setPending] = useState(false)
    const [data, setData] = useState<ResponseType | null>(null)

    const request = async (data?: RequestType) => {
        setPending(true)
        try {
            const response = await httpService(apiRequestObject, {
                ...((requestData || {}) as RequestType),
                ...((data || {}) as RequestType),
            })
            setData(response)
            if (onSuccess) {
                onSuccess(response)
            }
        } catch (error) {
            if (onError) {
                onError(error)
            }
        } finally {
            setPending(false)
        }
    }

    useEffect(() => {
        if (fetchOnMount) {
            request()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        request,
        pending,
        data,
    }
}

export default useAPI
