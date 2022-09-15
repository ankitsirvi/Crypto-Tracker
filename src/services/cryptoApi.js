import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    
    'X-RapidAPI-Key': 'b2ac465e07msh85d56b17d77976dp15221bjsn878a4fc7bceb',     // comig from  rapid api
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'                             // comig from rapid api    
            }


const baseUrl = 'https://coinranking1.p.rapidapi.com';        // url coming from the rapidapi

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })     // url is function that accept the url and headers

export const cryptoApi = createApi({
       reducerPath: 'cryptoApi',
       baseQuery: fetchBaseQuery({ baseUrl }),                                     // fetchBaseQuerry is a function taht acept the object
       endpoints: (builder) => ({                                       // builder is a function that accept the object
           getCryptos: builder.query({
             query: () => createRequest('/coins')
           }) 
       })
    });



    export const {
        useGetCryptosQuery,                          // this querry i scoming from cryptoapi
    } = cryptoApi;                                           
