import { Grid, TextField } from "@mui/material";
import React from 'react';
import { FormEmployeeState } from "../../types/types";
interface FormEmployeProps{
    handleChangeTextField: (event: React.ChangeEvent<HTMLInputElement>)=>void
    form: FormEmployeeState
}
export const FormEmployee = ({handleChangeTextField, form}:FormEmployeProps) => {
    return (
        <>
            <Grid item xs={12} md={7} lg={7} sm={12}>
                <TextField fullWidth required inputProps={{ maxLength: 30 }} onChange={handleChangeTextField} value={form.name} name="name" size="small" id="name" label="Escribe tus nombres" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={7} lg={7} sm={12}>
                <TextField fullWidth required inputProps={{ maxLength: 30 }} onChange={handleChangeTextField} value={form.last_name} name="last_name" size="small" id="last_name" label="Escribe tus apellidos" variant="outlined" />
            </Grid>
        </>
    );
}

export default FormEmployee;