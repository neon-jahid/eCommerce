import { Link, NavLink } from 'react-router-dom';
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
                <div className='group relative'>
                    <img
                        className='w-5 cursor-pointer'
                        src={assets.profile_icon}
                        alt=''
                    />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profiles</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link
                    to='/cart'
                    className='relative'>
                    <img
                        className='w-5 min-w-5'
                        src={assets.cart_icon}
                        alt=''
                    />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-8px]'>5</p>
                </Link>
                <img
                    className='w-5 cursor-pointer sm:hidden'
                    src={assets.menu_icon}
                    alt=''
                />
            </div>
        </nav>
    );
}

export default Navbar;
