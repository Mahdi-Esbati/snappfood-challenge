import { getVendorsListAPI } from '@/api/vendors-list'
import VendorRenderer from './components/VendorRenderer'
import { useInfiniteData } from '@/hooks/useInfiniteData'
import useAppDispatch from '@/hooks/useAppDispatch'
import { useEffect } from 'react'
import { setRestaurants } from './store'

const RestaurantsPage = () => {
    const dispatch = useAppDispatch()

    const { paginatedData, handleNextPage } = useInfiniteData({
        apiRequestObject: getVendorsListAPI,
        getPageData: (response) => response.finalResult,
        itemsPerPage: 10,
        requestData: {},
        debounceTime: 500,
    })

    useEffect(() => {
        dispatch(setRestaurants(paginatedData.flatMap((data) => data)))
    }, [paginatedData])

    return (
        <main style={{ height: '100vh', overflow: 'hidden' }}>
            <h2 className="text-title">رستوران ها</h2>

            <VendorRenderer onEndRender={handleNextPage} />
        </main>
    )
}

export default RestaurantsPage
