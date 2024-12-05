import { ReactElement } from 'react'
import '../../styles/header.css'
import routes from '../../../kovoRoutes'
import HeaderNav from './HeaderNav'

const Header = (): ReactElement => {
    return (
        <header className="header">
            <img src="logo.png" alt="Logo" className="logo" />
            <HeaderNav routes={routes} />
        </header>
    )
}

export default Header