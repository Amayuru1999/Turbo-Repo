import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinbaseApi = createApi({
  reducerPath: "coinbaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/coinbase`,
  }),
  endpoints: (build) => ({
    getPrimaryAccountTransactions: build.query<any, undefined>({
      query: () => ({ url: "/" }),
    }),
  }),
});

export const { useGetPrimaryAccountTransactionsQuery } = coinbaseApi;