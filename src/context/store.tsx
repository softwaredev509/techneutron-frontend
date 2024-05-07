import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../services/auth/AuthApi";
import { PaymentSlipsApi } from "../services/payment-slip/PaymentSlipsApi";
import { EmployeeApi } from "../services/employee/EmployeeApi";

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [PaymentSlipsApi.reducerPath]: PaymentSlipsApi.reducer,
    [EmployeeApi.reducerPath]: EmployeeApi.reducer,


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(AuthApi.middleware)
    .concat(PaymentSlipsApi.middleware)
    .concat(EmployeeApi.middleware)

})