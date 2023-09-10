import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Redux/AppState';
import productsService from '../../../Services/ProductsService';
import notification from '../../../Utils/Notification';
import useTitle from '../../../Utils/useTitle';
import ProductCard from '../ProductCard/ProductCard';
import TotalProducts from '../TotalProducts/TotalProducts';
import './ProductsList.css';

function ProductsList(): JSX.Element {
    useTitle('Products');
    const products = useSelector((appState: AppState) => appState.products); // products subscription

    useEffect(() => {
        productsService
            .getAllProducts()
            .catch((err) => notification.error(err));
    }, []);

    return (
        <div className='ProductsList'>
            <TotalProducts />
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList;
