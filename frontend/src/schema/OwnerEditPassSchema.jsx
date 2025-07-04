import * as Yup from "yup";
const OwnerEditPassSchema = Yup.object({
      oldPassword: Yup.string()
        .required("Old password is required"),
      newPassword: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm password is required"),
    })
    export default OwnerEditPassSchema;