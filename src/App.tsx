import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homepage'
import RestaurantsPage from './pages/restaurants'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/restaurants',
        element: <RestaurantsPage />,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
