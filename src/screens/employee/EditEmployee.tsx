import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { useFormik } from 'formik';
import { EmployeeValidationSchema } from './EmployeeValidationSchema';
import { EmployeeInitialValues } from './EmployeeInitialValues';
import { CreatedEmployeeResponse, EmployeeFormData } from './Employee.types';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from '../../services/employee/EmployeeApi';
import { ButtonStyle, FormInput, LableStyle, PayslipLine, PayslipStyle, PayslipTop } from '../payment-slip/PaymentSlip.style';
import {useNavigate} from "react-router-dom"

const EditEmployee = () => {

    const { id } = useParams<{id:string}>()
    const EmpId = parseInt(id, 10);
    const navigate = useNavigate()

    const { data, refetch } = useGetEmployeeByIdQuery(EmpId)

    const [updateEmployee] = useUpdateEmployeeMutation();

    const formik = useFormik({
        initialValues: EmployeeInitialValues,
        validationSchema: EmployeeValidationSchema,
        onSubmit: async (values: EmployeeFormData) => {

            try {
                const response:CreatedEmployeeResponse = await updateEmployee({ id: EmpId, data: values })
                console.log("Response when employee updated: ", response);
                if(response.data?.code === 200){
                    alert("Employee data updated successfully")
                    navigate('/employee/list')
                }
                refetch()

            } catch (error) {
                alert("Something went wrong try again!")
                console.log(error);

            }
        },
    });

    useEffect(() => {
        if (data) {
            for (const key in data) {
                formik.setFieldValue(key, data[key]);
            }
        }

    }, [data])

    return (
        <PayslipStyle>
            <Container maxWidth="lg">
                <PayslipTop>
                    <PayslipLine></PayslipLine>
                    <Typography variant="h4" gutterBottom>
                        Update Employee
                    </Typography>
                    <PayslipLine></PayslipLine>
                </PayslipTop>
                <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                    sx={{ mt: 3 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={19} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <FormInput>
                                <LableStyle htmlFor='id'>ID: </LableStyle>
                                <TextField
                                    fullWidth
                                    label="ID"
                                    name="id"
                                    type='number'
                                    value={formik.values.id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.id && Boolean(formik.errors.id)}
                                    helperText={formik.touched.id && formik.errors.id}
                                    margin="normal"
                                    autoComplete="off"
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={19} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <FormInput>
                                <LableStyle htmlFor='employee_id'>Employee ID: </LableStyle>
                                <TextField
                                    fullWidth
                                    label="Employee ID"
                                    name="employee_id"
                                    type='number'
                                    value={formik.values.employee_id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.employee_id && Boolean(formik.errors.employee_id)}
                                    helperText={formik.touched.employee_id && formik.errors.employee_id}
                                    margin="normal"
                                    autoComplete="off"
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='personal_number'>Personal Number: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Personal Number"
                                    name="personal_number"
                                    type='number'
                                    value={formik.values.personal_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.personal_number && Boolean(formik.errors.personal_number)}
                                    helperText={formik.touched.personal_number && formik.errors.personal_number}
                                    margin="normal"
                                    autoComplete="off"
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='first_name'>First Name: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="First Name"
                                    name="first_name"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                    helperText={formik.touched.first_name && formik.errors.first_name}
                                    margin="normal"
                                    autoComplete="off"
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='last_name'>Last Name: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="last_name"
                                    label="Last Name"
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                    helperText={formik.touched.last_name && formik.errors.last_name}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='bank'>Bank: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Bank"
                                    name="bank"
                                    value={formik.values.bank}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bank && Boolean(formik.errors.bank)}
                                    helperText={formik.touched.bank && formik.errors.bank}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='bank_account_number'>Bank Account Number: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Bank Account Number"
                                    name="bank_account_number"
                                    type='number'
                                    value={formik.values.bank_account_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bank_account_number && Boolean(formik.errors.bank_account_number)}
                                    helperText={formik.touched.bank_account_number && formik.errors.bank_account_number}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='IFSC'>IFSC: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="IFSC"
                                    name="IFSC"
                                    value={formik.values.IFSC}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.IFSC && Boolean(formik.errors.IFSC)}
                                    helperText={formik.touched.IFSC && formik.errors.IFSC}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='date_of_joining'>Date of Joining: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="date_of_joining"
                                    type='date'
                                    value={formik.values.date_of_joining}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.date_of_joining && Boolean(formik.errors.date_of_joining)}
                                    helperText={formik.touched.date_of_joining && formik.errors.date_of_joining}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='location'>Location: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Location"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='department'>Department: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Department"
                                    name="department"
                                    value={formik.values.department}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.department && Boolean(formik.errors.department)}
                                    helperText={formik.touched.department && formik.errors.department}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='designation'>Designation: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Designation"
                                    name="designation"
                                    value={formik.values.designation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.designation && Boolean(formik.errors.designation)}
                                    helperText={formik.touched.designation && formik.errors.designation}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='email'>Email: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='project'>Project: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Project"
                                    name="project"
                                    value={formik.values.project}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.project && Boolean(formik.errors.project)}
                                    helperText={formik.touched.project && formik.errors.project}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='employee_type'>Employee Type: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Employee Type"
                                    name="employee_type"
                                    value={formik.values.employee_type}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.employee_type && Boolean(formik.errors.employee_type)}
                                    helperText={formik.touched.employee_type && formik.errors.employee_type}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='gender'>Gender: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Gender"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                                    helperText={formik.touched.gender && formik.errors.gender}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='date_of_birth'>Date of Birth: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="date_of_birth"
                                    type='date'
                                    value={formik.values.date_of_birth}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.date_of_birth && Boolean(formik.errors.date_of_birth)}
                                    helperText={formik.touched.date_of_birth && formik.errors.date_of_birth}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='panCard'>Pan Card: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Pan Card"
                                    name="panCard"
                                    value={formik.values.panCard}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.panCard && Boolean(formik.errors.panCard)}
                                    helperText={formik.touched.panCard && formik.errors.panCard}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='aadharCard'>Aadhar Card: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Aadhar Card"
                                    name="aadharCard"
                                    type='number'
                                    value={formik.values.aadharCard}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.aadharCard && Boolean(formik.errors.aadharCard)}
                                    helperText={formik.touched.aadharCard && formik.errors.aadharCard}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='manager_id'>Manager Id: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Manager Id"
                                    name="manager_id"
                                    type='number'
                                    value={formik.values.manager_id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.manager_id && Boolean(formik.errors.manager_id)}
                                    helperText={formik.touched.manager_id && formik.errors.manager_id}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='supervisor_id'>Supervisor Id: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Supervisor Id"
                                    name="supervisor_id"
                                    type='supervisor_id'
                                    value={formik.values.supervisor_id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.supervisor_id && Boolean(formik.errors.supervisor_id)}
                                    helperText={formik.touched.supervisor_id && formik.errors.supervisor_id}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='country'>Country: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Country"
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                    helperText={formik.touched.country && formik.errors.country}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='state'>State: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="State"
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.state && Boolean(formik.errors.state)}
                                    helperText={formik.touched.state && formik.errors.state}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='zipcode'>Zipcode: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Zipcode"
                                    name="zipcode"
                                    type='number'
                                    value={formik.values.zipcode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
                                    helperText={formik.touched.zipcode && formik.errors.zipcode}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='supervisor_name'>Supervisor Name: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Supervisor Name"
                                    name="supervisor_name"
                                    value={formik.values.supervisor_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.supervisor_name && Boolean(formik.errors.supervisor_name)}
                                    helperText={formik.touched.supervisor_name && formik.errors.supervisor_name}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='manager_name'>Manager Name: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Manager Name"
                                    name="manager_name"
                                    value={formik.values.manager_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.manager_name && Boolean(formik.errors.manager_name)}
                                    helperText={formik.touched.manager_name && formik.errors.manager_name}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='total_experience'>Total Experience: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Total Experience"
                                    name="total_experience"
                                    type='number'
                                    value={formik.values.total_experience}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.total_experience && Boolean(formik.errors.total_experience)}
                                    helperText={formik.touched.total_experience && formik.errors.total_experience}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='marital_status'>Marital Status: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Marital Status"
                                    name="marital_status"
                                    value={formik.values.marital_status}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.marital_status && Boolean(formik.errors.marital_status)}
                                    helperText={formik.touched.marital_status && formik.errors.marital_status}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='emergency_contact_name'>Emergency Contact Name: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Emergency Contact Name"
                                    name="emergency_contact_name"
                                    value={formik.values.emergency_contact_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.emergency_contact_name && Boolean(formik.errors.emergency_contact_name)}
                                    helperText={formik.touched.emergency_contact_name && formik.errors.emergency_contact_name}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='emergency_contact_number'>Emergency Contact Number: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Emergency Contact Number"
                                    name="emergency_contact_number"
                                    type='number'
                                    value={formik.values.emergency_contact_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.emergency_contact_number && Boolean(formik.errors.emergency_contact_number)}
                                    helperText={formik.touched.emergency_contact_number && formik.errors.emergency_contact_number}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='emergency_contact_relationship'>Emergency Contact Relationship: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Emergency Contact Relationship"
                                    name="emergency_contact_relationship"
                                    value={formik.values.emergency_contact_relationship}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.emergency_contact_relationship && Boolean(formik.errors.emergency_contact_relationship)}
                                    helperText={formik.touched.emergency_contact_relationship && formik.errors.emergency_contact_relationship}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='address_line_1'>Address Line 1: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Address Line 1"
                                    name="address_line_1"
                                    value={formik.values.address_line_1}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address_line_1 && Boolean(formik.errors.address_line_1)}
                                    helperText={formik.touched.address_line_1 && formik.errors.address_line_1}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='address_line_2'>Address Line 2: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Address Line 2"
                                    name="address_line_2"
                                    value={formik.values.address_line_2}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address_line_2 && Boolean(formik.errors.address_line_2)}
                                    helperText={formik.touched.address_line_2 && formik.errors.address_line_2}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='city'>City: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="City"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='emergency_contact_email'>Emergency Contact Email: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Emergency Contact Email"
                                    name="emergency_contact_email"
                                    type='email'
                                    value={formik.values.emergency_contact_email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.emergency_contact_email && Boolean(formik.errors.emergency_contact_email)}
                                    helperText={formik.touched.emergency_contact_email && formik.errors.emergency_contact_email}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='passport_number'>Passport Number: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Passport Number"
                                    name="passport_number"
                                    value={formik.values.passport_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.passport_number && Boolean(formik.errors.passport_number)}
                                    helperText={formik.touched.passport_number && formik.errors.passport_number}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='passport_expiry_date'>Passport Expiry Date: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="passport_expiry_date"
                                    type='date'
                                    value={formik.values.passport_expiry_date}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.passport_expiry_date && Boolean(formik.errors.passport_expiry_date)}
                                    helperText={formik.touched.passport_expiry_date && formik.errors.passport_expiry_date}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='driving_license_number'>Driving License Number: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Driving License Number"
                                    name="driving_license_number"
                                    value={formik.values.driving_license_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.driving_license_number && Boolean(formik.errors.driving_license_number)}
                                    helperText={formik.touched.driving_license_number && formik.errors.driving_license_number}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='driving_license_expiry_date'>Driving License Expiry Date: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="driving_license_expiry_date"
                                    type='date'
                                    value={formik.values.driving_license_expiry_date}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.driving_license_expiry_date && Boolean(formik.errors.driving_license_expiry_date)}
                                    helperText={formik.touched.driving_license_expiry_date && formik.errors.driving_license_expiry_date}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='educational_qualification'>Educational Qualification: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Educational Qualification"
                                    name="educational_qualification"
                                    value={formik.values.educational_qualification}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.educational_qualification && Boolean(formik.errors.educational_qualification)}
                                    helperText={formik.touched.educational_qualification && formik.errors.educational_qualification}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='bank_branch'>Bank Branch: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Bank Branch"
                                    name="bank_branch"
                                    value={formik.values.bank_branch}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bank_branch && Boolean(formik.errors.bank_branch)}
                                    helperText={formik.touched.bank_branch && formik.errors.bank_branch}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='bank_branch_address'>Bank Branch Address: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Bank Branch Address"
                                    name="bank_branch_address"
                                    value={formik.values.bank_branch_address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bank_branch_address && Boolean(formik.errors.bank_branch_address)}
                                    helperText={formik.touched.bank_branch_address && formik.errors.bank_branch_address}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='password'>Password: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="password"
                                    name="password"
                                    type='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <ButtonStyle>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{ width: '60%', height: '4rem' }}
                            >
                                Update Employee
                            </Button>
                        </ButtonStyle>
                    </Grid>
                </Box>
            </Container>
        </PayslipStyle >
    );
};

export default EditEmployee;
