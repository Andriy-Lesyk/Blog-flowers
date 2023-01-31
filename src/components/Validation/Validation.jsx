import * as yup from 'yup';

function Validation() {
  const validate = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    phone: yup.number().required('Phone is required').min(8),
    message: yup.string().required('Message is required'),
  });
  return validate;
}

export default Validation;
