import * as yup from 'yup';


export const basicDetailsSchema = yup.object({
    firstName: yup.string().required('first name is required'),
    lastName: yup.string().required('last name is required')
});