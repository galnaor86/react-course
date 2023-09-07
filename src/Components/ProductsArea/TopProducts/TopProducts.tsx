import { useEffect, useState } from 'react';
import './TopProducts.css';
import productsService from '../../../Services/ProductsService';
import Product from '../../../Models/Product';
import ProductCard from '../ProductCard/ProductCard';

function TopProducts(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        productsService
            .getTopProducts()
            .then((products) => {
                setProducts(products);
            })
            .catch((err) => alert(err.message));
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
