import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';                        // importing the api to the store from the crypto api

export default configureStore({
    reducer: {                                            // reducer is the  object
       [cryptoApi.reducerPath]: cryptoApi.reducer,             // reducerpathe and reducer are the variables.The reducer is a pure function that accepts 2 parameters: the current state and an action object.
    },
});


