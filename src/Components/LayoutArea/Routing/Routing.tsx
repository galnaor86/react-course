import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../AboutArea/About/About';
import ContactUs from '../../AboutArea/ContactUs/ContactUs';
import EmployeesList from '../../EmployeesArea/EmployeesList/EmployeesList';
import Home from '../../HomeArea/Home/Home';
import ProductDetails from '../../ProductsArea/ProductDetails/ProductDetails';
import ProductsList from '../../ProductsArea/ProductsList/ProductsList';
import RouteNotFound from '../RouteNotFound/RouteNotFound';
import './Routing.css';
import { Suspense, lazy } from 'react';
import Spinner from '../../SharedArea/Spinner/Spinner';

// const LazyAbout = lazy(() => import('../../AboutArea/About/About'));

function Routing(): JSX.Element {
    const delay = () => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000000);
        });
    };

    const LazyAbout = lazy(async () => {
        await delay();
        return import('../../AboutArea/About/About');
    });

    return (
        <div className='Routing'>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/products' element={<ProductsList />}></Route>
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
