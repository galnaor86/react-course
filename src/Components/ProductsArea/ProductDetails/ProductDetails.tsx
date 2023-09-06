import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../../Models/Product';
import productsService from '../../../Services/ProductsService';
import './ProductDetails.css';

function ProductDetails(): JSX.Element {
  const param = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const id = +param.id;
    productsService
      .getProductById(id)
      .then((product) => setProduct(product))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className='ProductDetails'>
      <h3>Name: {product?.name}</h3>
      <h3>Price: {product?.price}$</h3>
      <h3>Stock: {product?.stock}</h3>
      <img src={product?.imageUrl} width={300} height={300}></img>
    </div>
  );
}

export default ProductDetails;
