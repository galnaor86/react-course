import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Product from '../../../Models/Product';
import productsService from '../../../Services/ProductsService';
import './ProductDetails.css';
import { NavLink } from 'react-router-dom';
import notification from '../../../Utils/Notification';

function ProductDetails(): JSX.Element {
    const params = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    const navigate = useNavigate();

    useEffect(() => {
        const id = +params.id;
        productsService
            .getProductById(id)
            .then((product) => setProduct(product))
            .catch((err) => notification.error(err));
    }, []);

    const onDeleteCLick = async () => {
        try {
            const isConfirm = window.confirm('Are you sure?');
            if (!isConfirm) {
                return;
            }

            await productsService.deleteProduct(product.id);
            notification.success('product deleted');
            navigate('/products');
        } catch (err: any) {
            notification.error(err);
        }
    };

    return (
        <div className='ProductDetails'>
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}$</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} width={300} height={300}></img>

            <button onClick={onDeleteCLick}>Delete</button>
            <NavLink to={`/products/edit/${product?.id}`}>Edit</NavLink>
        </div>
    );
}

export default ProductDetails;
