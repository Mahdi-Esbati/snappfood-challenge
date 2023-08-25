const BASE_URL = 'https://snappfood.ir/mobile/v3'

type FetchMethod = 'GET' | 'POST'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ApiRequestObject<RequestType, _ResponseType> = {
    endpoint: string
    method: FetchMethod
    body?: RequestType
}

const generateQueryParams = (
    data: ConstructorParameters<typeof URLSearchParams>[0]
) => new URLSearchParams(data)

async function httpService<RequestType, ResponseType>(
    request: ApiRequestObject<RequestType, ResponseType>,
    data?: RequestType
): Promise<ResponseType> {
    const requestData = (() => {
        let res = {}
        if (request.body) res = { ...res, ...request.body }
        if (data) res = { ...res, ...data }
        return res
    })()

    const requestOptions: RequestInit = {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
        },
        // @ts-ignore
        body:
            request.method !== 'GET' ? JSON.stringify(requestData) : undefined,
    }

    try {
        const response = await fetch(
            `${BASE_URL}/${request.endpoint}${
                request.method === 'GET'
                    ? // @ts-ignore
                      `?${generateQueryParams(requestData)}`
                    : ''
            }`,
            requestOptions
        )
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const data = (await response.json()) as ResponseType
        return data
    } catch (error: any) {
        throw new Error(`An error occurred: ${error?.message}`)
    }
}

export default httpService
