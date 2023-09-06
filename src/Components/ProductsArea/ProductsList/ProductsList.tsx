import { useEffect, useState } from 'react';
import Product from '../../../Models/Product';
import productsService from '../../../Services/ProductsService';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';
import useTitle from '../../../Utils/useTitle';

function ProductsList(): JSX.Element {
  useTitle('Products');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productsService
      .getAllProducts()
      .then((products) => setProducts(products))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className='ProductsList'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
