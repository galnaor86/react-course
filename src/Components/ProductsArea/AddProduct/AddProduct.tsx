import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Product from '../../../Models/Product';
import productsService from '../../../Services/ProductsService';
import './AddProduct.css';

function AddProduct(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Product>();
    const navigate = useNavigate();

    const onFormSubmit = async (product: Product) => {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productsService.addProduct(product);
            alert('Product added');
            navigate('/products');
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <div className='AddProduct'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h2>Add Product</h2>

                <div>
                    <label>Name: </label>
                    <input
                        type='text'
                        {...register('name', Product.nameValidation)}
                    ></input>
                    <span className='Error'>{errors?.name?.message}</span>
                </div>
                <div>
                    <label>Price: </label>
                    <input
                        type='number'
                        step={0.01}
                        {...register('price', Product.priceValidation)}
                    ></input>
                    <span className='Error'>{errors?.price?.message}</span>
                </div>
                <div>
                    <label>Stock: </label>
                    <input
                        type='number'
                        {...register('stock', Product.stockValidation)}
                    ></input>
                    <span className='Error'>{errors?.stock?.message}</span>
                </div>
                <div>
                    <label>Image: </label>
                    <input
                        type='file'
                        accept='image/*'
                        {...register('image', Product.imageValidation)}
                    ></input>
                    <span className='Error'>{errors?.image?.message}</span>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
