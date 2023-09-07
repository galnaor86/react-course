import axios from "axios";
import Product from "../Models/Product";
import { appStore } from "../Redux/AppState";
import { productActions } from "../Redux/ProductsSlice";
import appConfig from "../Utils/AppConfig";

class ProductsService {
    public async getAllProducts(): Promise<Product[]> {
        let products = appStore.getState().products; // one time value
        if (products.length === 0) {
            products = (await axios.get<Product[]>(appConfig.productsUrl)).data;
            appStore.dispatch(productActions.setAll(products));
        };

        return products;
    }

    public async getProductById(id: number): Promise<Product> {
        let product: Product = appStore.getState().products.find((product) => product.id === id);
        if (!product) {
            product = (await axios.get<Product>(`${appConfig.productsUrl}/${id}`)).data;
        }

        return product;
    }

    public async addProduct(product: Product): Promise<void> {
        const options = { headers: { "content-Type": "multipart/form-data" } };
        appStore.dispatch(
            productActions.addOne(
                (
                    await axios.post<Product>(
                        appConfig.productsUrl,
                        product,
                        options
                    )
                ).data
            )
        );
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(`${appConfig.productsUrl}/${id}`)
        appStore.dispatch(productActions.deleteOne(id));
    }

    public async updateProduct(product: Product): Promise<void> {
        const options = { headers: { "content-Type": "multipart/form-data" } };
        appStore.dispatch(
            productActions.updateOne(
                (
                    await axios.put<Product>(
                        `${appConfig.productsUrl}/${product.id}`,
                        product,
                        options
                    )
                ).data
            )
        );
    }

    public async getTopProducts(): Promise<Product[]> {
        const products = (await axios.get<Product[]>(appConfig.topProductsUrl)).data;

        return products;
    }

    public async getOutOfStockProducts(): Promise<Product[]> {
        const products = (await axios.get<Product[]>(appConfig.outOfStockProductsUrl)).data;

        return products;
    }
}

const productsService = new ProductsService();

export default productsService;