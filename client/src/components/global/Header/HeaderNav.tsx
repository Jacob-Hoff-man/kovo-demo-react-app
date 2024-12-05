import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { RouteData } from '../../../types/route'


type HeaderNavProps = {
    routes: RouteData[]
}

const HeaderNav = ({ routes }: HeaderNavProps): ReactElement => {
    return (
        <nav>
            <ul>
                {
                    routes.map((route) =>
                        <li key={route.name}>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default HeaderNav