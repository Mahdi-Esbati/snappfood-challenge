import { getVendorsListAPI } from '@/api/vendors-list'
import VendorRenderer from './components/VendorRenderer'
import { useInfiniteData } from '@/hooks/useInfiniteData'

const RestaurantsPage = () => {
    const { paginatedData, handleNextPage } = useInfiniteData({
        apiRequestObject: getVendorsListAPI,
        getPageData: (response) => response.finalResult,
        itemsPerPage: 10,
        requestData: {},
        debounceTime: 500,
    })

    return (
        <main style={{ height: '100vh', overflow: 'hidden' }}>
            <h2 className="text-title">رستوران ها</h2>

            <VendorRenderer
                data={paginatedData.flatMap((data) => data) || []}
                onEndRender={() => {
                    console.log('end rendered ')
                    handleNextPage()
                }}
            />
        </main>
    )
}

export default RestaurantsPage
