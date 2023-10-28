import TextField from "@mui/material/TextField";
import { FieldConfig, useField } from "formik";
import React from "react";

interface Props extends FieldConfig {
    label: String
}

const InputField =({ label, ...props}: Props)=>{
    const [field, meta] = useField(props);
    return (
        <TextField
        fullWidth
        label={label}
        {...field}
        {...props}
        error={meta.error && meta.touched && meta.error}
        />
    )
}

export default InputField;