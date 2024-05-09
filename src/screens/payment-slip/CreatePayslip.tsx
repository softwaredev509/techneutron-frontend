import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { useFormik } from 'formik';
import { ButtonStyle, FormInput, LableStyle, PayslipLine, PayslipStyle, PayslipTop } from './PaymentSlip.style';
import { PaymentSlipValidationSchema } from './PaymentSlipValidationSchema';
import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { initialValues } from './PaymentSlipInitialValues';
import { useGetEmployeeByIdQuery } from '../../services/employee/EmployeeApi';
import { useCreatePaymentSlipMutation } from '../../services/payment-slip/PaymentSlipsApi';
import { FormData, GeneratedPayslipResponse } from '../../types/PaymentSlip.types';

const CreatePayslip = () => {

    const [createPaymentSlip] = useCreatePaymentSlipMutation()
    const navigate = useNavigate()
    const { id } = useParams()
    const Id = parseInt(id, 10)

    const { data} = useGetEmployeeByIdQuery(Id !== undefined ? Id : 0)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: PaymentSlipValidationSchema,
        onSubmit: async (values: FormData) => {

            try {
                const response: GeneratedPayslipResponse = await createPaymentSlip(values)
                console.log(response);

                if (response.data?.code === "200") {
                    console.log("Payslip Created Successfully");
                    alert("Payslip Created Successfully")
                    navigate('/payslip/options')
                }

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
            console.log("salary slip data: ", data);
        }

    }, [data])


    return (
        <PayslipStyle>
            <Container maxWidth="lg">
                <PayslipTop>
                    <PayslipLine></PayslipLine>
                    <Typography variant="h4" gutterBottom>
                        Payslip for the {formik.values.period}
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
                                    disabled={true}
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='total_working_days'>Total Working Days: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Total Working Days"
                                    name="total_working_days"
                                    type='number'
                                    value={formik.values.total_working_days}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.total_working_days && Boolean(formik.errors.total_working_days)}
                                    helperText={formik.touched.total_working_days && formik.errors.total_working_days}
                                    margin="normal"
                                    autoComplete="off"
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='present_working_days'>Present Working Days: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Present Working Days"
                                    name="present_working_days"
                                    type='number'
                                    value={formik.values.present_working_days}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.present_working_days && Boolean(formik.errors.present_working_days)}
                                    helperText={formik.touched.present_working_days && formik.errors.present_working_days}
                                    margin="normal"
                                    autoComplete="off"
                                    required
                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='period'>Period: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="period"
                                    type='month'
                                    value={formik.values.period}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.period && Boolean(formik.errors.period)}
                                    helperText={formik.touched.period && formik.errors.period}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='basic_salary'>Basic Salary: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Basic salary"
                                    name="basic_salary"
                                    type='number'
                                    value={formik.values.basic_salary}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.basic_salary && Boolean(formik.errors.basic_salary)}
                                    helperText={formik.touched.basic_salary && formik.errors.basic_salary}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='house_rent_allowance'>House Rent Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="House Rent Allowance"
                                    name="house_rent_allowance"
                                    type='number'
                                    value={formik.values.house_rent_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.house_rent_allowance && Boolean(formik.errors.house_rent_allowance)}
                                    helperText={formik.touched.house_rent_allowance && formik.errors.house_rent_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='special_allowance'>Special Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Special Allowance"
                                    name="special_allowance"
                                    type='number'
                                    value={formik.values.special_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.special_allowance && Boolean(formik.errors.special_allowance)}
                                    helperText={formik.touched.special_allowance && formik.errors.special_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='conveyance'>Conveyance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Conveyance"
                                    name="conveyance"
                                    type='number'
                                    value={formik.values.conveyance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.conveyance && Boolean(formik.errors.conveyance)}
                                    helperText={formik.touched.conveyance && formik.errors.conveyance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='additional_special_allowance'>Additional Special Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Additional Special Allowance"
                                    name="additional_special_allowance"
                                    type='number'
                                    value={formik.values.additional_special_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.additional_special_allowance && Boolean(formik.errors.additional_special_allowance)}
                                    helperText={formik.touched.additional_special_allowance && formik.errors.additional_special_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='on_call_shift_allowance'>On Call Shift Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="On Call Shift Allowance"
                                    name="on_call_shift_allowance"
                                    type='number'
                                    value={formik.values.on_call_shift_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.on_call_shift_allowance && Boolean(formik.errors.on_call_shift_allowance)}
                                    helperText={formik.touched.on_call_shift_allowance && formik.errors.on_call_shift_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='stat_bonus'>Stat Bonus: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Stat Bonus"
                                    name="stat_bonus"
                                    type='number'
                                    value={formik.values.stat_bonus}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.stat_bonus && Boolean(formik.errors.stat_bonus)}
                                    helperText={formik.touched.stat_bonus && formik.errors.stat_bonus}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='provident_fund'>Provident Fund: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Provident Fund"
                                    name="provident_fund"
                                    type='number'
                                    value={formik.values.provident_fund}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.provident_fund && Boolean(formik.errors.provident_fund)}
                                    helperText={formik.touched.provident_fund && formik.errors.provident_fund}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='professional_tax'>Professional Tax: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Professional Tax"
                                    name="professional_tax"
                                    type='number'
                                    value={formik.values.professional_tax}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.professional_tax && Boolean(formik.errors.professional_tax)}
                                    helperText={formik.touched.professional_tax && formik.errors.professional_tax}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='income_tax'>Income Tax: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Income Tax"
                                    name="income_tax"
                                    type='number'
                                    value={formik.values.income_tax}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.income_tax && Boolean(formik.errors.income_tax)}
                                    helperText={formik.touched.income_tax && formik.errors.income_tax}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='gross_earning'>Gross Earning: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Gross Earning"
                                    name="gross_earning"
                                    type='number'
                                    value={formik.values.gross_earning}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gross_earning && Boolean(formik.errors.gross_earning)}
                                    helperText={formik.touched.gross_earning && formik.errors.gross_earning}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='gross_deduction'>Gross Deduction: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Gross Deduction"
                                    name="gross_deduction"
                                    type='number'
                                    value={formik.values.gross_deduction}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gross_deduction && Boolean(formik.errors.gross_deduction)}
                                    helperText={formik.touched.gross_deduction && formik.errors.gross_deduction}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='net_pay'>Net Pay: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Net Pay"
                                    name="net_pay"
                                    type='number'
                                    value={formik.values.net_pay}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.net_pay && Boolean(formik.errors.net_pay)}
                                    helperText={formik.touched.net_pay && formik.errors.net_pay}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='overtime_hours'>Overtime Hours: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Overtime Hours"
                                    name="overtime_hours"
                                    type='number'
                                    value={formik.values.overtime_hours}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.overtime_hours && Boolean(formik.errors.overtime_hours)}
                                    helperText={formik.touched.overtime_hours && formik.errors.overtime_hours}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='overtime_pay'>Overtime Pay: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Overtime Pay"
                                    name="overtime_pay"
                                    type='number'
                                    value={formik.values.overtime_pay}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.overtime_pay && Boolean(formik.errors.overtime_pay)}
                                    helperText={formik.touched.overtime_pay && formik.errors.overtime_pay}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='bonus'>Bonus: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Bonus"
                                    name="bonus"
                                    type='number'
                                    value={formik.values.bonus}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bonus && Boolean(formik.errors.bonus)}
                                    helperText={formik.touched.bonus && formik.errors.bonus}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='commission'>Commission: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Commission"
                                    name="commission"
                                    type='number'
                                    value={formik.values.commission}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.commission && Boolean(formik.errors.commission)}
                                    helperText={formik.touched.commission && formik.errors.commission}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='reimbursement'>Reimbursement: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Reimbursement"
                                    name="reimbursement"
                                    type='number'
                                    value={formik.values.reimbursement}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.reimbursement && Boolean(formik.errors.reimbursement)}
                                    helperText={formik.touched.reimbursement && formik.errors.reimbursement}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>
                                <LableStyle htmlFor='other_allowances'>Other Allowances: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Other Allowances"
                                    name="other_allowances"
                                    type='number'
                                    value={formik.values.other_allowances}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.other_allowances && Boolean(formik.errors.other_allowances)}
                                    helperText={formik.touched.other_allowances && formik.errors.other_allowances}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='deduction_details'>Deduction Details: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Deduction Details"
                                    name="deduction_details"
                                    value={formik.values.deduction_details}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.deduction_details && Boolean(formik.errors.deduction_details)}
                                    helperText={formik.touched.deduction_details && formik.errors.deduction_details}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='remarks'>Remarks: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Remarks"
                                    name="remarks"
                                    value={formik.values.remarks}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                                    helperText={formik.touched.remarks && formik.errors.remarks}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='employee_rating'>Employee Rating: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Employee Rating"
                                    name="employee_rating"
                                    type='number'
                                    value={formik.values.employee_rating}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.employee_rating && Boolean(formik.errors.employee_rating)}
                                    helperText={formik.touched.employee_rating && formik.errors.employee_rating}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='performance_bonus'>Performance Bonus: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Performance Bonus"
                                    name="performance_bonus"
                                    type='number'
                                    value={formik.values.performance_bonus}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.performance_bonus && Boolean(formik.errors.performance_bonus)}
                                    helperText={formik.touched.performance_bonus && formik.errors.performance_bonus}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='shift_allowance'>Shift Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Shift Allowance"
                                    name="shift_allowance"
                                    type='number'
                                    value={formik.values.shift_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.shift_allowance && Boolean(formik.errors.shift_allowance)}
                                    helperText={formik.touched.shift_allowance && formik.errors.shift_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='medical_allowance'>Medical Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Medical Allowance"
                                    name="medical_allowance"
                                    type='number'
                                    value={formik.values.medical_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.medical_allowance && Boolean(formik.errors.medical_allowance)}
                                    helperText={formik.touched.medical_allowance && formik.errors.medical_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='leave_balance'>Leave Balance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Leave Balance"
                                    name="leave_balance"
                                    type='number'
                                    value={formik.values.leave_balance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.leave_balance && Boolean(formik.errors.leave_balance)}
                                    helperText={formik.touched.leave_balance && formik.errors.leave_balance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='loan_deduction'>Loan Deduction: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Loan Deduction"
                                    name="loan_deduction"
                                    type='number'
                                    value={formik.values.loan_deduction}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.loan_deduction && Boolean(formik.errors.loan_deduction)}
                                    helperText={formik.touched.loan_deduction && formik.errors.loan_deduction}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='insurance_premium'>Insurance Premium: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Insurance Premium"
                                    name="insurance_premium"
                                    type='number'
                                    value={formik.values.insurance_premium}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.insurance_premium && Boolean(formik.errors.insurance_premium)}
                                    helperText={formik.touched.insurance_premium && formik.errors.insurance_premium}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='attendance_bonus'>Attendance Bonus: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Attendance Bonus"
                                    name="attendance_bonus"
                                    type='number'
                                    value={formik.values.attendance_bonus}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.attendance_bonus && Boolean(formik.errors.attendance_bonus)}
                                    helperText={formik.touched.attendance_bonus && formik.errors.attendance_bonus}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='travel_allowance'>Travel Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Travel Allowance"
                                    name="travel_allowance"
                                    type='number'
                                    value={formik.values.travel_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.travel_allowance && Boolean(formik.errors.travel_allowance)}
                                    helperText={formik.touched.travel_allowance && formik.errors.travel_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='uniform_allowance'>Uniform Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Uniform Allowance"
                                    name="uniform_allowance"
                                    type='number'
                                    value={formik.values.uniform_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.uniform_allowance && Boolean(formik.errors.uniform_allowance)}
                                    helperText={formik.touched.uniform_allowance && formik.errors.uniform_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='training_allowance'>Training Allowance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Training Allowance"
                                    name="training_allowance"
                                    type='number'
                                    value={formik.values.training_allowance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.training_allowance && Boolean(formik.errors.training_allowance)}
                                    helperText={formik.touched.training_allowance && formik.errors.training_allowance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='other_deductions'>Other Deductions: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Other Deductions"
                                    name="other_deductions"
                                    type='number'
                                    value={formik.values.other_deductions}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.other_deductions && Boolean(formik.errors.other_deductions)}
                                    helperText={formik.touched.other_deductions && formik.errors.other_deductions}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='bonus_details'>Bonus Details: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Bonus Details"
                                    name="bonus_details"
                                    value={formik.values.bonus_details}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bonus_details && Boolean(formik.errors.bonus_details)}
                                    helperText={formik.touched.bonus_details && formik.errors.bonus_details}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='incentive'>Incentive: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Incentive"
                                    name="incentive"
                                    type='number'
                                    value={formik.values.incentive}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.incentive && Boolean(formik.errors.incentive)}
                                    helperText={formik.touched.incentive && formik.errors.incentive}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='tax_deduction_at_source'>Tax Deduction At Source: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Tax Deduction At Source"
                                    name="tax_deduction_at_source"
                                    type='number'
                                    value={formik.values.tax_deduction_at_source}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.tax_deduction_at_source && Boolean(formik.errors.tax_deduction_at_source)}
                                    helperText={formik.touched.tax_deduction_at_source && formik.errors.tax_deduction_at_source}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='salary_advance'>Salary Advance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Salary Advance"
                                    name="salary_advance"
                                    type='number'
                                    value={formik.values.salary_advance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.salary_advance && Boolean(formik.errors.salary_advance)}
                                    helperText={formik.touched.salary_advance && formik.errors.salary_advance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='loan_balance'>Loan Balance: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Loan Balance"
                                    name="loan_balance"
                                    type='number'
                                    value={formik.values.loan_balance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.loan_balance && Boolean(formik.errors.loan_balance)}
                                    helperText={formik.touched.loan_balance && formik.errors.loan_balance}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='conveyance'>Payment Mode: </LableStyle>
                                <TextField

                                    fullWidth
                                    label="Payment Mode"
                                    name="payment_mode"
                                    value={formik.values.payment_mode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.payment_mode && Boolean(formik.errors.payment_mode)}
                                    helperText={formik.touched.payment_mode && formik.errors.payment_mode}
                                    margin="normal"
                                    autoComplete="off"
                                    required

                                />
                            </FormInput>
                        </Grid>
                        <Grid item xs={8}>
                            <FormInput>

                                <LableStyle htmlFor='payment_date'>Payment Date: </LableStyle>
                                <TextField

                                    fullWidth
                                    name="payment_date"
                                    type='date'
                                    value={formik.values.payment_date.split(" ")[0]}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.payment_date && Boolean(formik.errors.payment_date)}
                                    helperText={formik.touched.payment_date && formik.errors.payment_date}
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
                                Create Payslip
                            </Button>
                        </ButtonStyle>
                    </Grid>
                </Box>
            </Container>
        </PayslipStyle >
    );
};

export default CreatePayslip;
