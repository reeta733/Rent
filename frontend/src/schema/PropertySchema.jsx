import * as YUP from 'yup';

let PropertySchema = YUP.object().shape({
  title: YUP.string().required('Title is required'),
  address: YUP.string().required('Address is required'),
  property_type: YUP.string().required('Property Type is required'), // ✅ fixed here
  rent: YUP.number().typeError("Rent must be a number").required('Rent is required'),
  deposit: YUP.number().typeError("Deposit must be a number").required('Deposit is required'),
});

export default PropertySchema;
