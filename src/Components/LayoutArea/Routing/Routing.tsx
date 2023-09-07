import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactUs from '../../AboutArea/ContactUs/ContactUs';
import Login from '../../AuthArea/Login/Login';
import Register from '../../AuthArea/Register/Register';
import EmployeesList from '../../EmployeesArea/EmployeesList/EmployeesList';
import Home from '../../HomeArea/Home/Home';
import AddProduct from '../../ProductsArea/AddProduct/AddProduct';
import EditProduct from '../../ProductsArea/EditProduct/EditProduct';
import OutOfStockProducts from '../../ProductsArea/OutOfStockProducts/OutOfStockProducts';
import ProductDetails from '../../ProductsArea/ProductDetails/ProductDetails';
import ProductsList from '../../ProductsArea/ProductsList/ProductsList';
import TopProducts from '../../ProductsArea/TopProducts/TopProducts';
import Spinner from '../../SharedArea/Spinner/Spinner';
import RouteNotFound from '../RouteNotFound/RouteNotFound';
import './Routing.css';

// const LazyAbout = lazy(() => import('../../AboutArea/About/About'));

function Routing(): JSX.Element {
    const delay = () => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    const LazyAbout = lazy(async () => {
        await delay();
        return import('../../AboutArea/About/About');
    });

    return (
        <div className='Routing'>
            <Routes>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>

                <Route path='/home' element={<Home />}></Route>
                <Route path='/products' element={<ProductsList />}></Route>
                <Route path='/products/top' element={<TopProducts />}></Route>
                <Route path='/products/new' element={<AddProduct />}></Route>
                <Route
                    path='/products/out-of-stock'
                    element={<OutOfStockProducts />}
                ></Route>
                <Route
                    path='/products/edit/:id'
                    element={<EditProduct />}
                ></Route>
                <Route
                    path='/products/details/:id'
                    element={<ProductDetails />}
                ></Route>
                <Route
                    path='/about'
                    element={
                        <Suspense fallback={<Spinner />}>
                            <LazyAbout />
                        </Suspense>
                    }
                ></Route>
                <Route path='/contact-us' element={<ContactUs />}></Route>
                <Route path='/employees' element={<EmployeesList />}></Route>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='*' element={<RouteNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
