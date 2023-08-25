interface Vendor {}

export type VendorsListRequest = Partial<{
    page: number
    page_size: number
    lat: number
    long: number
}>
export type VendorsListResponse = Vendor[]
