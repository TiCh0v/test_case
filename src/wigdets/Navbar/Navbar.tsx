import './Navbar.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <Link 
                to={'/products'}
                className='link'
            >
                Products 
            </Link>
            <Link 
                to={'/create'}
                className='link'
            >
                Create 
            </Link>
            
        </div>
    )
}

export default Navbar