import { configureStore } from "@reduxjs/toolkit";
import Product from "../Models/Product";
import { productReducer } from "./ProductsSlice";

export type AppState = {
    products: Product[];
}

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer
    }
})