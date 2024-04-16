import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'config'

const authApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '/v1' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: 'create',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi

export default authApi
