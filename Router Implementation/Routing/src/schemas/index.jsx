import * as yup from "yup";
export const signUpSchema = yup.object({
  first_name: yup
    .string()
    .min(2)
    .max(25)
    .required("Please enter your First Name"),
  last_name: yup
    .string()
    .min(2)
    .max(25)
    .required("Please enter your Last Name"),
  email: yup.string().email().required("Please enter your Email"),
  password: yup.string().min(6).required("Please enter your Password"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});
