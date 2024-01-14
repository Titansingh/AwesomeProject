import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bookPageApi = createApi({
  reducerPath: 'bookPageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openlibrary.org',
  }),
  endpoints: builder => ({
    getAuthor: builder.query({
      query: authorName => `/search/authors.json?q=${authorName}`,
    }),
  }),
});

export const {useGetAuthorQuery} = bookPageApi;
