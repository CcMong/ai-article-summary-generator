import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// We are configuring a store, which is a global state that saves the entire information of our app. However, most times, we do not need the entire state. We only need to reduce it to a particular slice of the entire "cake". In this case, it will be the articleApi
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    }, // Reducer allows us to get just the slice we need of global store for the state
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) // This allows us to do something with the state before we get it
})