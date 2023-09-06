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
}

const productsService = new ProductsService();

export default productsService;