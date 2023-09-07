import { useEffect, useState } from 'react';
import Product from '../../../Models/Product';
import productsService from '../../../Services/ProductsService';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';
import useTitle from '../../../Utils/useTitle';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Redux/AppState';
import TotalProducts from '../TotalProducts/TotalProducts';

function ProductsList(): JSX.Element {
    useTitle('Products');
    const products = useSelector((appState: AppState) => appState.products); // products subscription

    useEffect(() => {
        productsService.getAllProducts().catch((err) => alert(err.message));
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
