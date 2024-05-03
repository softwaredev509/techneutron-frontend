import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateUserResponseType,
  CreateUserType,
  LogUserResponseType,
  LogUserType,
} from "./AuthApi.types";

export const AuthApi = createApi({
  reducerPath: "AuthApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000" }),

  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => "/api/candidates",
    }),

    createUser: builder.mutation<CreateUserResponseType, CreateUserType>({
      query: (newUser) => ({
        url: "/api/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),

    logUser: builder.mutation<LogUserResponseType, LogUserType>({
      query: (user) => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useLogUserMutation } =
  AuthApi;
