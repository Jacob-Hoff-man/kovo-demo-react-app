import { ReactElement } from 'react'
import '../styles/header.css'

type HeaderProps = {}

const Header = ({ }: HeaderProps): ReactElement => {
    return (
        <header className="header">
            <img src="logo.png" alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/items">Items</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header