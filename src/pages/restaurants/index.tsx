import RestaurantCard from './components/RestaurantCard'

const RestaurantsPage = () => {
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
