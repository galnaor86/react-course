import { RegisterOptions } from "react-hook-form";

class Product {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation: RegisterOptions<Product, 'name'> = {
        required: { value: true, message: 'missing name' },
        minLength: { value: 2, message: 'name too short' },
        maxLength: { value: 20, message: 'name too long' },
    };

    public static priceValidation: RegisterOptions<Product, 'price'> = {
        required: { value: true, message: 'missing price' },
        min: { value: 0, message: 'too cheap' },
        max: { value: 1000, message: 'too expensive' },
    };

    public static stockValidation: RegisterOptions<Product, 'stock'> = {
        required: { value: true, message: 'missing stock' },
        min: { value: 0, message: 'too low stock' },
        max: { value: 1000, message: 'too many stock' },
    }

    public static imageValidation: RegisterOptions<Product, 'image'> = {
        required: { value: true, message: 'missing image' }
    }
}

export default Product;
