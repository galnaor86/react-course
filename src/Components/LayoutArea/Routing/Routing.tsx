import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../AboutArea/About/About';
import ContactUs from '../../AboutArea/ContactUs/ContactUs';
import EmployeesList from '../../EmployeesArea/EmployeesList/EmployeesList';
import Home from '../../HomeArea/Home/Home';
import ProductDetails from '../../ProductsArea/ProductDetails/ProductDetails';
import ProductsList from '../../ProductsArea/ProductsList/ProductsList';
import RouteNotFound from '../RouteNotFound/RouteNotFound';
import './Routing.css';

function Routing(): JSX.Element {
  return (
    <div className='Routing'>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<ProductsList />}></Route>
        <Route
          path='/products/details/:id'
          element={<ProductDetails />}
        ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/employees' element={<EmployeesList />}></Route>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='*' element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
