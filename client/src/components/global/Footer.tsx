import { ReactElement } from 'react'
import '../styles/footer.css'

type FooterProps = {}

const Footer = ({ }: FooterProps): ReactElement => {
    return (
        <p className='footer'>
            Jacob Hoffman &copy; 2024
        </p>
    )
}

export default Footer