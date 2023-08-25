import { ApiRequestObject } from '@/utils/httpService'
import { VendorsListRequest, VendorsListResponse } from './types'

export const getVendorsListAPI: ApiRequestObject<
    VendorsListRequest,
    VendorsListResponse
> = {
    endpoint: `restaurant/vendors-list`,
    body: { lat: 35.754, long: 51.328, page: 0, page_size: 10 },
    method: 'GET',
}
