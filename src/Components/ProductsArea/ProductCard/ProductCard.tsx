import { NavLink } from 'react-router-dom';
import Product from '../../../Models/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <div className='ProductCard'>
      <div className='Details'>
        {product.name}
        <br />
        {product.price}$
        <br />
        {product.stock} in stock
      </div>
      <div>
        <NavLink to={`/products/details/${product.id}`}>
          <img
            className='Image'
            src={product.imageUrl}
            width={100}
            height={100}
          ></img>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductCard;
