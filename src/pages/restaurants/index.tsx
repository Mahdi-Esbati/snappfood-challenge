import useAPI from '@/hooks/useAPI'
import { getVendorsListAPI } from '@/api/vendors-list'
import VendorRenderer from './components/VendorRenderer'

const RestaurantsPage = () => {
    const { data, pending } = useAPI({
        apiRequestObject: getVendorsListAPI,
        fetchOnMount: true,
        requestData: { page: 0 },
    })

    console.log({ data, pending })

    return (
        <main className="p-4 pt-6">
            <h2 className="text-title">رستوران ها</h2>

            <div className="d-flex flex-column ai-center gap-6">
                <VendorRenderer data={data?.data?.finalResult || []} />
            </div>
        </main>
    )
}

export default RestaurantsPage
