import useAPI from '@/hooks/useAPI'
import RestaurantCard from './components/RestaurantCard'
import { getVendorsListAPI } from '@/api/vendors-list'

const RestaurantsPage = () => {
    const { data: vendors, pending } = useAPI({
        apiRequestObject: getVendorsListAPI,
        fetchOnMount: true,
        requestData: { page: 2 },
    })

    console.log({ vendors, pending })

    return (
        <main className="p-4 pt-6">
            <h2 className="text-title">رستوران ها</h2>

            <div className="d-flex flex-column ai-center gap-6">
                {new Array(40).fill(null).map(() => (
                    <RestaurantCard />
                ))}
            </div>
        </main>
    )
}

export default RestaurantsPage
