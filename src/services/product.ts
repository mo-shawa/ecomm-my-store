import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getInitialProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    getPageOfProducts: builder.query<Product[], number>({
      // this doesn't really do anything because the api only has 20 products, and doesn't support offset. But this is how I would implement pagination. https://fakestoreapi.com/docs
      query: (page) => `/products?limit=20&offset=${page * 20}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (prev, next) => [...prev, ...next],
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
})

export const { useGetInitialProductsQuery, useGetPageOfProductsQuery } = api
