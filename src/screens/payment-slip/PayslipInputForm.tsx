import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import {
  ButtonStyle,
  FormInput,
  LableStyle,
  PayslipLine,
  PayslipStyle,
  PayslipTop,
} from "./PaymentSlip.style";
import { FormData } from "./PaymentSlip.types";
import { PaymentSlipValidationSchema } from "./PaymentSlipValidationSchema";
import { initialValues } from "./PaymentSlipInitialValues";

const PayslipForm = () => {
  const handleSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <PayslipStyle>
      <Container maxWidth="lg">
        <PayslipTop>
          <PayslipLine></PayslipLine>
          <Typography variant="h4" gutterBottom>
            Payslip for the {initialValues.payment_date}
          </Typography>
          <PayslipLine></PayslipLine>
        </PayslipTop>
        <Formik
          initialValues={initialValues}
          validationSchema={PaymentSlipValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Grid container spacing={4}>
                {/* <Grid item xs={8}>
                  <FormInput>

                    <LableStyle htmlFor='employeeName'>Employee Name: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Employee Name"
                      name="employeeName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.employeeName && !!errors.employeeName}
                      helperText={touched.employeeName && errors.employeeName}
                      margin="normal"
                      autoComplete="off"
                      required
                      InputProps={{
                        readOnly: true,
                    }}
                    />
                  </FormInput>
                </Grid> */}
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="employee_id">Employee ID: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Employee ID"
                      name="employee_id"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.employee_id && !!errors.employee_id}
                      helperText={touched.employee_id && errors.employee_id}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="total_working_days">
                      Total Working Days:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Total Working Days"
                      name="total_working_days"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.total_working_days &&
                        !!errors.total_working_days
                      }
                      helperText={
                        touched.total_working_days && errors.total_working_days
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="present_working_days">
                      Present Working Days:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Present Working Days"
                      name="present_working_days"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.present_working_days &&
                        !!errors.present_working_days
                      }
                      helperText={
                        touched.present_working_days &&
                        errors.present_working_days
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="period">Period: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Period"
                      name="period"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.period && !!errors.period}
                      helperText={touched.period && errors.period}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="basic_salary">
                      Basic Salary:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Basic salary"
                      name="basic_salary"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.basic_salary && !!errors.basic_salary}
                      helperText={touched.basic_salary && errors.basic_salary}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="house_rent_allowance">
                      House Rent Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="House Rent Allowance"
                      name="house_rent_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.house_rent_allowance &&
                        !!errors.house_rent_allowance
                      }
                      helperText={
                        touched.house_rent_allowance &&
                        errors.house_rent_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="special_allowance">
                      Special Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Special Allowance"
                      name="special_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.special_allowance && !!errors.special_allowance
                      }
                      helperText={
                        touched.special_allowance && errors.special_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="conveyance">Conveyance: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Conveyance"
                      name="conveyance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.conveyance && !!errors.conveyance}
                      helperText={touched.conveyance && errors.conveyance}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="additional_special_allowance">
                      Additional Special Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Additional Special Allowance"
                      name="additional_special_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.additional_special_allowance &&
                        !!errors.additional_special_allowance
                      }
                      helperText={
                        touched.additional_special_allowance &&
                        errors.additional_special_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="on_call_shift_allowance">
                      On Call Shift Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="On Call Shift Allowance"
                      name="on_call_shift_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.on_call_shift_allowance &&
                        !!errors.on_call_shift_allowance
                      }
                      helperText={
                        touched.on_call_shift_allowance &&
                        errors.on_call_shift_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="stat_bonus">Stat Bonus: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Stat Bonus"
                      name="stat_bonus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.stat_bonus && !!errors.stat_bonus}
                      helperText={touched.stat_bonus && errors.stat_bonus}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                {/* <Grid item xs={12}>
                  <PayslipMiddle>
                    <Typography variant="h4" gutterBottom>
                      Earnings
                    </Typography>
                    <EarningsLine></EarningsLine>
                  </PayslipMiddle>
                </Grid> */}
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="provident_fund">
                      Provident Fund:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Provident Fund"
                      name="provident_fund"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.provident_fund && !!errors.provident_fund}
                      helperText={
                        touched.provident_fund && errors.provident_fund
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="professional_tax">
                      Professional Tax:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Professional Tax"
                      name="professional_tax"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.professional_tax && !!errors.professional_tax
                      }
                      helperText={
                        touched.professional_tax && errors.professional_tax
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="income_tax">Income Tax: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Income Tax"
                      name="income_tax"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.income_tax && !!errors.income_tax}
                      helperText={touched.income_tax && errors.income_tax}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="gross_earning">
                      Gross Earning:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Gross Earning"
                      name="gross_earning"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.gross_earning && !!errors.gross_earning}
                      helperText={touched.gross_earning && errors.gross_earning}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="gross_deduction">
                      Gross Deduction:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Gross Deduction"
                      name="gross_deduction"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.gross_deduction && !!errors.gross_deduction
                      }
                      helperText={
                        touched.gross_deduction && errors.gross_deduction
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="net_pay">Net Pay: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Net Pay"
                      name="net_pay"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.net_pay && !!errors.net_pay}
                      helperText={touched.net_pay && errors.net_pay}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="overtime_hours">
                      Overtime Hours:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Overtime Hours"
                      name="overtime_hours"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.overtime_hours && !!errors.overtime_hours}
                      helperText={
                        touched.overtime_hours && errors.overtime_hours
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="overtime_pay">
                      Overtime Pay:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Overtime Pay"
                      name="overtime_pay"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.overtime_pay && !!errors.overtime_pay}
                      helperText={touched.overtime_pay && errors.overtime_pay}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="bonus">Bonus: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Bonus"
                      name="bonus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.bonus && !!errors.bonus}
                      helperText={touched.bonus && errors.bonus}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="commission">Commission: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Commission"
                      name="commission"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.commission && !!errors.commission}
                      helperText={touched.commission && errors.commission}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="reimbursement">
                      Reimbursement:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Reimbursement"
                      name="reimbursement"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.reimbursement && !!errors.reimbursement}
                      helperText={touched.reimbursement && errors.reimbursement}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="other_allowances">
                      Other Allowances:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Other Allowances"
                      name="other_allowances"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.other_allowances && !!errors.other_allowances
                      }
                      helperText={
                        touched.other_allowances && errors.other_allowances
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="deduction_details">
                      Deduction Details:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Deduction Details"
                      name="deduction_details"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.deduction_details && !!errors.deduction_details
                      }
                      helperText={
                        touched.deduction_details && errors.deduction_details
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="remarks">Remarks: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Remarks"
                      name="remarks"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.remarks && !!errors.remarks}
                      helperText={touched.remarks && errors.remarks}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="employee_rating">
                      Employee Rating:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Employee Rating"
                      name="employee_rating"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.employee_rating && !!errors.employee_rating
                      }
                      helperText={
                        touched.employee_rating && errors.employee_rating
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="performance_bonus">
                      Performance Bonus:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Performance Bonus"
                      name="performance_bonus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.performance_bonus && !!errors.performance_bonus
                      }
                      helperText={
                        touched.performance_bonus && errors.performance_bonus
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="shift_allowance">
                      Shift Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Shift Allowance"
                      name="shift_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.shift_allowance && !!errors.shift_allowance
                      }
                      helperText={
                        touched.shift_allowance && errors.shift_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="medical_allowance">
                      Medical Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Medical Allowance"
                      name="medical_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.medical_allowance && !!errors.medical_allowance
                      }
                      helperText={
                        touched.medical_allowance && errors.medical_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="leave_balance">
                      Leave Balance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Leave Balance"
                      name="leave_balance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.leave_balance && !!errors.leave_balance}
                      helperText={touched.leave_balance && errors.leave_balance}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="loan_deduction">
                      Loan Deduction:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Loan Deduction"
                      name="loan_deduction"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.loan_deduction && !!errors.loan_deduction}
                      helperText={
                        touched.loan_deduction && errors.loan_deduction
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="insurance_premium">
                      Insurance Premium:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Insurance Premium"
                      name="insurance_premium"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.insurance_premium && !!errors.insurance_premium
                      }
                      helperText={
                        touched.insurance_premium && errors.insurance_premium
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="attendance_bonus">
                      Attendance Bonus:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Attendance Bonus"
                      name="attendance_bonus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.attendance_bonus && !!errors.attendance_bonus
                      }
                      helperText={
                        touched.attendance_bonus && errors.attendance_bonus
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="travel_allowance">
                      Travel Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Travel Allowance"
                      name="travel_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.travel_allowance && !!errors.travel_allowance
                      }
                      helperText={
                        touched.travel_allowance && errors.travel_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="uniform_allowance">
                      Uniform Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Uniform Allowance"
                      name="uniform_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.uniform_allowance && !!errors.uniform_allowance
                      }
                      helperText={
                        touched.uniform_allowance && errors.uniform_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="training_allowance">
                      Training Allowance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Training Allowance"
                      name="training_allowance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.training_allowance &&
                        !!errors.training_allowance
                      }
                      helperText={
                        touched.training_allowance && errors.training_allowance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="other_deductions">
                      Other Deductions:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Other Deductions"
                      name="other_deductions"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.other_deductions && !!errors.other_deductions
                      }
                      helperText={
                        touched.other_deductions && errors.other_deductions
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="bonus_details">
                      Bonus Details:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Bonus Details"
                      name="bonus_details"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.bonus_details && !!errors.bonus_details}
                      helperText={touched.bonus_details && errors.bonus_details}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="incentive">Incentive: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Incentive"
                      name="incentive"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.incentive && !!errors.incentive}
                      helperText={touched.incentive && errors.incentive}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="tax_deduction_at_source">
                      Tax Deduction At Source:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Tax Deduction At Source"
                      name="tax_deduction_at_source"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.tax_deduction_at_source &&
                        !!errors.tax_deduction_at_source
                      }
                      helperText={
                        touched.tax_deduction_at_source &&
                        errors.tax_deduction_at_source
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="salary_advance">
                      Salary Advance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Salary Advance"
                      name="salary_advance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.salary_advance && !!errors.salary_advance}
                      helperText={
                        touched.salary_advance && errors.salary_advance
                      }
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="loan_balance">
                      Loan Balance:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Loan Balance"
                      name="loan_balance"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.loan_balance && !!errors.loan_balance}
                      helperText={touched.loan_balance && errors.loan_balance}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="conveyance">Payment Mode: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Payment Mode"
                      name="payment_mode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.payment_mode && !!errors.payment_mode}
                      helperText={touched.payment_mode && errors.payment_mode}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="payment_date">
                      Payment Date:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      name="payment_date"
                      type="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.payment_date && !!errors.payment_date}
                      helperText={touched.payment_date && errors.payment_date}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="employeeId">Employee Id: </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Employee Id"
                      name="employeeId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.employeeId && !!errors.employeeId}
                      helperText={touched.employeeId && errors.employeeId}
                      margin="normal"
                      autoComplete="off"
                      required
                    />
                  </FormInput>
                </Grid>
                <Grid item xs={8}>
                  <FormInput>
                    <LableStyle htmlFor="employeeEmployeeId">
                      employeeEmployee Id:{" "}
                    </LableStyle>
                    <Field
                      as={TextField}
                      fullWidth
                      label="employeeEmployee Id"
                      name="employeeEmployeeId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.employeeEmployeeId &&
                        !!errors.employeeEmployeeId
                      }
                      helperText={
                        touched.employeeEmployeeId && errors.employeeEmployeeId
                      }
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
                    style={{ width: "60%", height: "4rem" }}
                  >
                    Generate Payslip
                  </Button>
                </ButtonStyle>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </PayslipStyle>
  );
};

export default PayslipForm;
