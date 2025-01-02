import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar() {
    return (
        <nav className='flex items-center justify-between py-5 font-medium'>
            <img
                src={assets.logo}
                alt=''
            />
            <ul>
                <li>
                    <NavLink to=''>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='collection'>Collection</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
