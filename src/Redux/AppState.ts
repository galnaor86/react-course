import { configureStore } from "@reduxjs/toolkit";
import Product from "../Models/Product";
import User from "../Models/User";
import { authReducer } from "./AuthSlice";
import { productReducer } from "./ProductsSlice";

export type AppState = {
    products: Product[];
    user: User;
}

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer,
        user: authReducer
    }
})