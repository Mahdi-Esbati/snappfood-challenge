import { getVendorsListAPI } from '@/api/vendors-list'
import VendorRenderer from './components/VendorRenderer'
import { useInfiniteData } from '@/hooks/useInfiniteData'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useRef } from 'react'

const RestaurantsPage = () => {
    const intersectionRef = useRef<HTMLDivElement>(null)
    const { paginatedData, handleNextPage } = useInfiniteData({
        apiRequestObject: getVendorsListAPI,
        getPageData: (response) => response.finalResult,
        itemsPerPage: 10,
        requestData: {},
        debounceTime: 500,
    })
    useIntersectionObserver(intersectionRef, { onIntersection: handleNextPage })

    return (
        <main className="p-4 pt-6">
            <h2 className="text-title">رستوران ها</h2>

            <div className="d-flex flex-column ai-center gap-6">
                <VendorRenderer
                    data={paginatedData.flatMap((data) => data) || []}
                />
                <div ref={intersectionRef} />
            </div>
        </main>
    )
}

export default RestaurantsPage
