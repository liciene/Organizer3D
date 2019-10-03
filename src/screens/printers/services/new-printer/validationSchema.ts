import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Please, complete this field!')
        .max(15, 'Please, use less then 15 letters'),
    model: Yup.string()
        .required('Please, complete this field!')
        .max(15, 'Please, use less then 15 letters'),
    cost: Yup.number()
        .typeError('Please insert only numbers, use . to decimals')
        .required('Please, complete this field')
        .max(8, 'Please, use less then 8 caracteres'),
    wattsUsage: Yup.number()
        .typeError('Please insert only numbers, use . to decimals')
        .required('Please, complete this field')
        .max(4, 'Please, use less then 8 caracteres'),
});

export default validationSchema;
