import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import PlaceOrder from '../pages/PlaceOrder';
import Cart from '../pages/Cart';
import Navbar from '../components/Navbar';

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: '/collection', element: <Collection /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/product/:productId', element: <Product /> },
            { path: '/login', element: <Login /> },
            { path: '/orders', element: <Orders /> },
            { path: '/place-order', element: <PlaceOrder /> },
            { path: '/cart', element: <Cart /> },
        ],
    },
]);

function NavLayout() {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Navbar />
            <Outlet />
        </div>
    );
}
