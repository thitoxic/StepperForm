import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { basicDetailsSchema } from "./validationSchema.tsx";
import InputField from "./InputField.tsx";

const MainForm = () => {
  return (
    <div>
<Formik
       initialValues={{ firstName: '', lastName: '' }}
       validationSchema={basicDetailsSchema}
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
       }) => (
         <form onSubmit={handleSubmit}>
           <InputField
             name="firstName"
             label="first name"
           />
           
           <InputField
             name="lastName"
             label="last name"
           />
           
           <Button type="submit" disabled={isSubmitting}>
             Submit
           </Button>
         </form>
       )}
     </Formik>
    </div>
  );
};

export default MainForm;
