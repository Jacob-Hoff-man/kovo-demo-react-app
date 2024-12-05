import { RouteData } from './types/route'
import HomePage from './pages/HomePage'
import ItemsPage from './pages/ItemsPage'

const kovoRoutes: RouteData[] = [
    {
        name: 'Home',
        path: '/',
        element: <HomePage />,
    },
    {
        name: 'Items',
        path: '/items',
        element: <ItemsPage />
    }
]

export default kovoRoutes