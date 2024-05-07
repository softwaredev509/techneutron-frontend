import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EmployeeFormData } from "../../content/Forms/employee/Employee.types";
import { CreatedEmployeeApiResponse, DeleteSuccessApiResponse } from "../../types/EmployeeApi.types";

export const EmployeeApi = createApi({

    reducerPath: "EmployeeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000" }),

    endpoints: (builder) => ({

        createEmployee: builder.mutation<CreatedEmployeeApiResponse, EmployeeFormData>({
            query: (employee) => ({
                url: "/api/employees",
                method: "POST",
                body: employee,
            }),
        }),

        getEmployees: builder.query<EmployeeFormData[], void>({
            query: () => "/api/employees",
        }),

        getEmployeeById: builder.query<EmployeeFormData, number>({
            query: (id) => `api/employees/${id}`,
        }),

        updateEmployee: builder.mutation<any, { id: number; data: EmployeeFormData }>({
            query: ({ id, data }) => ({
                url: `/api/employees/${id}`,
                method: "PUT",
                body: data,
            }),
        }),

        deleteEmployee: builder.mutation<DeleteSuccessApiResponse, number>({
            query: (id) => ({
                url: `/api/employees/${id}`,
                method: "DELETE",
            }),
        }),

    }),
});

export const {
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
    useGetEmployeeByIdQuery,
    useGetEmployeesQuery,
    useUpdateEmployeeMutation
} = EmployeeApi;
