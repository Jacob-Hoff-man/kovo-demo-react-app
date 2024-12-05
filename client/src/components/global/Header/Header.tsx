import '@styles/header.css'
import { ReactElement } from 'react'
import routes from '@constants/kovoRoutes'
import HeaderNav from '@components/global/Header/HeaderNav'


const Header = (): ReactElement => {
    return (
        <header className="header">
            <img src="logo.png" alt="Logo" className="logo" />
            <HeaderNav routes={routes} />
        </header>
    )
}

export default Header