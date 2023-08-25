export interface Vendor {
    id: number
    vendorCode: '097xx6'
    noOrder: boolean
    title: string
    description: string
    rate: number
    rating: 8.1812949640288
    logo: string
    defLogo: string
    isOpen: boolean
    minDeliveryFee: number
    maxDeliveryFee: number
    deliveryTime: number
    paymentTypes: number[]
    minOrder: number
    address: string
    phone: string
    website: ''
    status: 1
    lat: 35.722794
    lon: 51.326988
    city: string
    area: string
    commentCount: number
    establishment: 'RESTAURANT'
    onlineOrder: boolean
    voteCount: 623
    menuUrl: string
    discountValue: 0
    discountForAll: false
    containerFee: 0
    coverPath: string
    cuisinesArray: {
        id: number
        title: string
    }[]
    vendorType: 'RESTAURANT'
    childType: 'RESTAURANT'
    budgetClass: 'لوکس'
    vendorTypeTitle: 'رستوران'
    isZFExpress: false
    deliveryFee: 60000
    backgroundImage: string
    backgroundImageCustom: string
    has_coupon: true
    coupon_count: 2
    best_coupon: '5٪ تخفیف مخصوص سفارش اول'
    is_pro: false
    has_first_coupon: true
    menuImage: []
    countReview: 623
    countOfUserImages: 172
    deliveryFeeDiscount: 0
    trendingScore: 0
    delay: ''
    deliver: true
    eta: -1
    min_eta: -1
    max_eta: -1
    open_at_eta: false
    action: ''
    has_delay: false
    delay_time: 0
    total_time: 0
    bid: false
    superTypeAlias: 'RESTAURANT'
    is_food_party: false
    is_market_party: false
    click_id: null
    cpc_campaign_hash: null
    cpc_spot: null
    is_ecommerce: false
    is_economical: false
    is_grocery_vip: false
    is_grocery_returnable: false
    is_grocery_economic: false
    status_title: 'ACTIVE'
    status_text: ''
    status_description: ''
    has_cashback: false
    new_type: 'RESTAURANT'
    new_type_title: 'رستوران'
}

export type VendorsListRequest = Partial<{
    page: number
    page_size: number
    lat: number
    long: number
}>

export type VendorResponse = {
    type: 'VENDOR'
    data: Vendor
}

export type TextResponse = {
    type: 'TEXT'
    data: string
}

export type VendorsListResponse = {
    render_type: number
    status: boolean
    data: {
        count: number
        finalResult: (VendorResponse | TextResponse)[]
        open_count: number
    }
}

export function isVendor(
    data: VendorResponse | TextResponse
): data is VendorResponse {
    return !!data && data.type === 'VENDOR' && !!data?.data?.vendorCode
}

export function isText(
    data: VendorResponse | TextResponse
): data is TextResponse {
    return !!data && data.type === 'TEXT' && typeof data.data === 'string'
}
