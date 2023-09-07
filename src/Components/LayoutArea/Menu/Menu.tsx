import { NavLink } from 'react-router-dom';
import './Menu.css';
import TotalProducts from '../../ProductsArea/TotalProducts/TotalProducts';

function Menu(): JSX.Element {
    return (
        <div className='Menu'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/products' end>
                Products
            </NavLink>
            <NavLink to='/products/new'>Add Product</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
            <NavLink to='/employees'>Employees</NavLink>

            <TotalProducts />
        </div>
    );
}

export default Menu;
