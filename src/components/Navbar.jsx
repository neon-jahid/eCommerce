import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar() {
    return (
        <nav className='flex items-center justify-between py-5 font-medium'>
            <img
                className='w-36'
                src={assets.logo}
                alt=''
            />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/'>
                    <p className='uppercase'>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection'>
                    <p className='uppercase'>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <p className='uppercase'>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <p className='uppercase'>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img
                    className='w-5 cursor-pointer'
                    src={assets.search_icon}
                    alt=''
                />
            </div>
        </nav>
    );
}

export default Navbar;
