interface Vendor {}

export interface VendorsListRequest {
    page: number
    page_size: number
    lat: number
    long: number
}
export type VendorsListResponse = Vendor[]
