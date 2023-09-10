import { useEffect, useState } from 'react';
import './TopProducts.css';
import productsService from '../../../Services/ProductsService';
import Product from '../../../Models/Product';
import ProductCard from '../ProductCard/ProductCard';
import notification from '../../../Utils/Notification';

function TopProducts(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        productsService
            .getTopProducts()
            .then((products) => {
                setProducts(products);
            })
            .catch((err) => notification.error(err));
    }, []);

    return (
        <div className='TopProducts'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default TopProducts;
