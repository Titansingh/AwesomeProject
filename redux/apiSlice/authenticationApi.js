import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authenticationApi = createApi({

  reducerPath:"authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/auth"
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "post",
        body: userData,
      })
    })
  })
});

export const { useLoginUserMutation } = authenticationApi;
