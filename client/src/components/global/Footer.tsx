import '@styles/footer.css'
import { ReactElement } from 'react'

type FooterProps = {}

const Footer = ({ }: FooterProps): ReactElement => {
    return (
        <p className='footer'>
            Jacob Hoffman &copy; 2024
        </p>
    )
}

export default Footer