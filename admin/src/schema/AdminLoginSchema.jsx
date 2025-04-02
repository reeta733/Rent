import * as YUP from 'yup';

const AdminLoginSchema = YUP.object({
    username: YUP.string().required("Insert Your correct username"),
    password: YUP.string().required("Password is required")
});

export default AdminLoginSchema;