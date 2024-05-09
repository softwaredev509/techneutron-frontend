import React, { useEffect } from 'react'
import { ActionButton, EmployeeListHeading, EmployeeTable, EmployeeTableContainer, TableBody, TableCell, TableHeader, TableRow } from './Employee.styles'
import { EmployeeDeleteResponse } from './Employee.types'
import { useNavigate } from 'react-router'
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../../services/employee/EmployeeApi'

const EmployeeList = ({ paySlipAction }) => {

    const { data, refetch } = useGetEmployeesQuery()
    const navigate = useNavigate()
    const [deleteEmployee] = useDeleteEmployeeMutation();

    const handleDeleteEmployee = async (Id: number) => {
        try {
            const response: EmployeeDeleteResponse = await deleteEmployee(Id)
            if (response.data?.code === "200") {
                alert("Employee deleted successfully!")
            } else {
                alert(`employee with Id:${Id} not found.`)
            }
            refetch()

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        refetch()
        
    }, [data])

    return (
        <EmployeeTableContainer>
            <EmployeeListHeading>Employee List</EmployeeListHeading>
            <EmployeeTable>
                <TableHeader>
                    <TableRow>
                        <TableCell>Emploee Id</TableCell>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>Designation</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((employee) => (
                        <TableRow key={employee.employee_id}>
                            <TableCell>{employee.employee_id}</TableCell>
                            <TableCell>{employee.first_name} {employee.last_name}</TableCell>
                            <TableCell>{employee.designation}</TableCell>


                            {paySlipAction ? <TableCell> <ActionButton onClick={() => navigate(`/payslip/create/${employee.id}`)}>Create payslip</ActionButton> </TableCell> : <TableCell><ActionButton onClick={() => navigate(`/employee/update/${employee.id}`)}>Update</ActionButton>
                                <ActionButton onClick={() => handleDeleteEmployee(employee.id)}>Delete</ActionButton></TableCell>}

                        </TableRow>
                    ))}
                </TableBody>
            </EmployeeTable>
        </EmployeeTableContainer >
    )
}

export default EmployeeList