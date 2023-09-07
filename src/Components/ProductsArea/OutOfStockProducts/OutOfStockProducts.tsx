import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../../../Models/Product';
import { AppState } from '../../../Redux/AppState';
import productsService from '../../../Services/ProductsService';
import ProductCard from '../ProductCard/ProductCard';
import './OutOfStockProducts.css';

function OutOfStockProducts(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);

    const role = useSelector((appState: AppState) => appState.user?.role);

    useEffect(() => {
        role === 'Admin' &&
            productsService
                .getOutOfStockProducts()
                .then((products) => {
                    setProducts(products);
                })
                .catch((err) => alert(err.message));
    }, []);

    return (
        <div className='OutOfStockProducts'>
            {role === 'Admin' ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <span>You are not allowed here</span>
            )}
        </div>
    );
}

export default OutOfStockProducts;
