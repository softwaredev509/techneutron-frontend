import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../services/auth/AuthApi";

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});
