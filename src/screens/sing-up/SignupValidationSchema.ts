import * as yup from "yup";

export const SignupValidationSchema = yup.object({
  first_name: yup
    .string()
    .min(2, "First name should be of minimum 2 characters length")
    .required("First Name is required"),
  last_name: yup
    .string()
    .min(2, "Last name should be of minimum 2 characters length")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number"
    )
    .required("Password is required"),
});
