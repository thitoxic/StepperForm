import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { basicDetailsSchema } from "./validationSchema.tsx";

const MainForm = () => {
  return (
    <div>
<Formik
       initialValues={{ firstName: '', lastName: '' }}
       validate={values => {
         const errors = {};
         if (!values.firstName) {
           errors.firstName = 'Required';
         }  
         if(!values.lastName){
           errors.lastName = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="firstName"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
           <input
             type="lastName"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           />
           {errors.lastName && touched.lastName && errors.lastName}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  );
};

export default MainForm;
