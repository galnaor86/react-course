import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ProductModel from '../../../Models/Product';
import ProductsService from '../../../Services/ProductsService';
import './EditProduct.css';

function EditProduct(): JSX.Element {
    const { register, handleSubmit, formState, setValue } =
        useForm<ProductModel>();
    const [imageUrl, setImageUrl] = useState<string>('');
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const id: number = +params.id;

    useEffect(() => {
        ProductsService.getProductById(id)
            .then((product) => {
                setImageUrl(product.imageUrl);
                setValue('name', product.name);
                setValue('price', product.price);
                setValue('stock', product.stock);
            })
            .catch((err) => alert(err.stack));
    }, []);

    async function editProduct(product: ProductModel): Promise<void> {
        try {
            product.id = id;
            product.image = (product.image as unknown as FileList)[0];
            await ProductsService.updateProduct(product);
            navigate('/products');
        } catch (err: any) {
            alert(err.stack);
        }
    }

    return (
        <div className='EditProduct'>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit(editProduct)} className='Form'>
                <label>Name: </label>
                <input
                    type='text'
                    {...register('name', ProductModel.nameValidation)}
                ></input>
                <span className='Error'>{formState.errors.name?.message}</span>
                <label>Price: </label>
                <input
                    type='number'
                    step='0.01'
                    {...register('price', ProductModel.priceValidation)}
                ></input>
                <span className='Error'>{formState.errors.price?.message}</span>
                <label>Stock: </label>
                <input
                    type='number'
                    {...register('stock', ProductModel.stockValidation)}
                ></input>
                <span className='Error'>{formState.errors.stock?.message}</span>
                <label>Image: </label>
                <input
                    type='file'
                    accept='image/*'
                    {...register('image')}
                ></input>
                <span className='Error'>{formState.errors.image?.message}</span>
                <img src={imageUrl} className='ExistingImage'></img>
                <button>Update</button>
            </form>
        </div>
    );
}

export default EditProduct;
