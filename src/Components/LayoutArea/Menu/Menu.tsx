import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../Redux/AppState';
import TotalProducts from '../../ProductsArea/TotalProducts/TotalProducts';
import './Menu.css';

function Menu(): JSX.Element {
    const role = useSelector((appState: AppState) => appState.user?.role);

    return (
        <div className='Menu'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/products' end>
                Products
            </NavLink>
            <NavLink to='/products/new'>Add Product</NavLink>
            {role && <NavLink to='/products/top'>Top Products</NavLink>}
            {role === 'Admin' && (
                <NavLink to='/products/out-of-stock'>
                    Out Of Stock Products
                </NavLink>
            )}
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
            <NavLink to='/employees'>Employees</NavLink>

            <TotalProducts />
        </div>
    );
}

export default Menu;
