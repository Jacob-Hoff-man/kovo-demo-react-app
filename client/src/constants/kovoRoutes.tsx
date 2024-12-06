import { RouteData } from '@types-kovo/route'
import HomePage from '@pages/HomePage'
import ItemsPage from '@pages/item/ItemsPage'
import CoursesPage from '@pages/course/CoursesPage'

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
    },
    {
        name: 'Courses',
        path: '/courses',
        element: <CoursesPage />
    }
]

export default kovoRoutes