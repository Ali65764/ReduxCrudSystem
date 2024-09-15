import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {rootReducer} from "../app/rootReducer";
import { persistReducer,persistStore } from "redux-persist";


const persistConfig ={
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware:()=>[],
    devTools:true
});

const persistor =persistStore(store)

export {store ,persistor}