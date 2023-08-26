import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homepage'
import RestaurantsPage from './pages/restaurants'

import { Provider } from 'react-redux'
import { store } from '@/store'


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
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
