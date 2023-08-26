import { ApiRequestObject } from '@/utils/httpService'
import { VendorsListRequest, VendorsListResponse } from './types'

export const getVendorsListAPI: ApiRequestObject<
    VendorsListRequest,
    VendorsListResponse
> = {
    endpoint: `restaurant/vendors-list`,
    body: { lat: 35.754, long: 51.328 },
    method: 'GET',
    transformer: (rawResponse) => {
        if (rawResponse && 'data' in rawResponse) return rawResponse.data
        return rawResponse
    },
}
