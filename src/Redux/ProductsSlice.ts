import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../Models/Product";

// Reducers
function setAll(currentState: Product[], action: PayloadAction<Product[]>): Product[] {
    return action.payload;
}

function addOne(currentState: Product[], action: PayloadAction<Product>): Product[] {
    return [...currentState, action.payload];
}

function updateOne(currentState: Product[], action: PayloadAction<Product>): Product[] {
    const newState = [...currentState];
    const index = newState.findIndex((product) => product.id === action.payload.id);
    index >= 0 && (newState[index] = action.payload);
    return newState;
}

function deleteOne(currentState: Product[], action: PayloadAction<number>): Product[] {
    const newState = [...currentState];
    const index = newState.findIndex((product) => product.id === action.payload);
    index >= 0 && newState.splice(index, 1);
    return newState;
}

const productsSlice = createSlice({
    name: 'products',  // slice name
    initialState: [],
    reducers: { setAll, addOne, updateOne, deleteOne }
});

// Export actions
export const productActions = productsSlice.actions;

// Export reducers
export const productReducer = productsSlice.reducer;