import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreatePayslipResponse, DeletePaymentSlipResponse, PaymentSlip, UpdatePaymentSlipRequest } from "../../types/PaymentSlipApi.types";
import { FormData } from "../../types/PaymentSlip.types";

export const PaymentSlipsApi = createApi({

  reducerPath: "PaymentSlipsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000" }),

  endpoints: (builder) => ({

    createPaymentSlip: builder.mutation<CreatePayslipResponse, FormData>({
      query: (paymentSlip) => ({
        url: "/api/salary-slips",
        method: "POST",
        body: paymentSlip,
      }),
    }),

    generatePayslipPdf: builder.mutation<object, number>({
      query: (id) => ({
        url: `/api/user/genrateAndsend/${id}`,
        method: "POST",
      }),
    }),

    getPaymentSlips: builder.query<FormData[], void>({
      query: () => "/api/salary-slips",
    }),

    getPaymentSlipById: builder.query<FormData, number>({
      query: (id) => `api/salary-slips/${id}`,
    }),

    updatePaymentSlip: builder.mutation<PaymentSlip, { id: string; data: UpdatePaymentSlipRequest }>({
      query: ({ id, data }) => ({
        url: `/api/salary-slips/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    deletePaymentSlip: builder.mutation<DeletePaymentSlipResponse, string>({
      query: (id) => ({
        url: `/api/salary-slips/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const {
  useCreatePaymentSlipMutation,
  useGeneratePayslipPdfMutation,
  useGetPaymentSlipsQuery,
  useGetPaymentSlipByIdQuery,
  useUpdatePaymentSlipMutation,
  useDeletePaymentSlipMutation,
} = PaymentSlipsApi;
