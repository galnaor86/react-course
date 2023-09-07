import axios from "axios";
import Product from "../Models/Product";
import appConfig from "../Utils/AppConfig";

class ProductsService {
    public async getAllProducts(): Promise<Product[]> {
        const response = await axios.get<Product[]>(appConfig.productsUrl);

        return response.data;
    }

    public async getProductById(id: number): Promise<Product> {
        const response = await axios.get<Product>(`${appConfig.productsUrl}/${id}`);

        return response.data;
    }

    public async addProduct(product: Product): Promise<void> {
        const options = {
            headers: { 'content-Type': 'multipart/form-data' }
        };
        await axios.post<Product>(appConfig.productsUrl, product, options);
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(`${appConfig.productsUrl}/${id}`)
    }

    public async updateProduct(product: Product): Promise<void> {
        const options = {
            headers: { 'content-Type': 'multipart/form-data' }
        };
        await axios.put<Product>(appConfig.productsUrl, product, options);
    }
}

const productsService = new ProductsService();

export default productsService;