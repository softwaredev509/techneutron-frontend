import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreatePaymentSlipRequest, DeletePaymentSlipResponse, PaymentSlip, UpdatePaymentSlipRequest } from "./PaymentSlipApi.types";

export const PaymentSlipsApi = createApi({

  reducerPath: "PaymentSlipsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173" }),

  endpoints: (builder) => ({

    createPaymentSlip: builder.mutation<PaymentSlip, CreatePaymentSlipRequest>({
      query: (paymentSlip) => ({
        url: "/api/payment-slips",
        method: "POST",
        body: paymentSlip,
      }),
    }),

    getPaymentSlips: builder.query<PaymentSlip[], void>({
      query: () => "/api/payment-slips",
    }),

    getPaymentSlipById: builder.query<PaymentSlip, string>({
      query: (id) => `/api/payment-slips/${id}`,
    }),

    updatePaymentSlip: builder.mutation<PaymentSlip, { id: string; data: UpdatePaymentSlipRequest }>({
      query: ({ id, data }) => ({
        url: `/api/payment-slips/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    deletePaymentSlip: builder.mutation<DeletePaymentSlipResponse, string>({
      query: (id) => ({
        url: `/api/payment-slips/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const {
  useCreatePaymentSlipMutation,
  useGetPaymentSlipsQuery,
  useGetPaymentSlipByIdQuery,
  useUpdatePaymentSlipMutation,
  useDeletePaymentSlipMutation,
} = PaymentSlipsApi;
