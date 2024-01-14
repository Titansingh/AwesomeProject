import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authenticationApi = createApi({

  reducerPath:"authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/users"
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "Post",
        body: userData,
      })
    })
  })
});

export const { useLoginUserMutation } = authenticationApi;
