import { configureStore } from "@reduxjs/toolkit";
import Product from "../Models/Product";
import User from "../Models/User";
import { authReducer } from "./AuthSlice";
import logActions from "./Middleware";
import { productReducer } from "./ProductsSlice";
import logger from "redux-logger";

export type AppState = {
    products: Product[];
    user: User;
}

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer,
        user: authReducer
    },
    // middleware: [logActions]
    middleware: [logger]
})