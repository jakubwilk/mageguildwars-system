import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/v1' }),
  endpoints: (builder) => ({
    login: builder.query({
      query: (data) => ({
        url: 'create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginQuery } = authApi

export default authApi
