import { Grid, Paper, Button } from "@mui/material";
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { ThemeProvider } from '@mui/material/styles';
import setEmployee from "../../services/setEmployee";
import { FormEmployeeState, InProcessState, IListEmployees, resSetEmpleado } from "../../types/types";
import DatePicker from "./DatePicker";
import FormEmployee from "./FormEmployee";
import { themeNewEmployee } from "../../assets/themes"
import Loader from "../loader/Loader";
import {Typography} from '@mui/material';


interface NewEmployeProps {
    setListEmployees: (value: IListEmployees["data"]["employees"]) => void
    listEmployees: IListEmployees["data"]["employees"]
}

export const NewEmployee = ({ setListEmployees, listEmployees }: NewEmployeProps) => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());//console.log(value?.format('YYYY-MM-DD'))
    const [form, setForm] = useState<FormEmployeeState>({ name: "", last_name: "" });
    const [inProcess, setinProcess] = useState<InProcessState>({ error: false, message: "", hasLoading: false })

    const handleChangeDatePicker = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    const handleChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (form.name === "" || form.last_name === "" || value?.format('YYYY-MM-DD') === "")
            return alert("Todos los campos son obligatorios");

        setinProcess({ error: false, message: "", hasLoading: true })

        setEmployee(form, value?.format('YYYY-MM-DD')).then((res:resSetEmpleado) => {
            if (res.success !== true) return setinProcess({ error: true, message: res.data, hasLoading: false })
           
            setListEmployees([...listEmployees, { id: listEmployees.length + 1, name: form.name, last_name: form.last_name, birthday: value?.format('YYYY-MM-DD') }]);
            setinProcess({ error: false, message: res.data, hasLoading: false })
        }).catch((err) => {
            setinProcess({ error: false, message: err, hasLoading: false })
        })
    }

    return (
        <ThemeProvider theme={themeNewEmployee}>
            <Grid container mt={0} mb={8}>
                <Grid item xs={11} md={5} lg={5} sm={11} ml={2}>
                    <Paper elevation={3} sx={{ p: 3, display: "flex", flexDirection: "row" }}>
                        <Grid container spacing={2}>
                            <FormEmployee handleChangeTextField={handleChangeTextField} form={form} />
                            <DatePicker handleChangeDatePicker={handleChangeDatePicker} value={value} />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container>
                    <Grid item xs={5} md={2} lg={2} sm={5} mt={4} ml={2}>
                        <Button fullWidth onClick={handleClick} variant="contained">
                            Enviar Datos
                        </Button>
                        <Typography variant="subtitle2" gutterBottom mt={2}>
                            {inProcess.message}
                        </Typography>
                        {inProcess.hasLoading && <Loader />}
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default NewEmployee;