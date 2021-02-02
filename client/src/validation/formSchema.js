import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("First name is required").min(3, "First name must be 3 chars long"),
  password: yup.string().required('Password is required')
});