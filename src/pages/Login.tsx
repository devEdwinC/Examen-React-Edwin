import { useEffect, useState } from "react";
import {Avatar, Button, CssBaseline, TextField, Box, Typography, Container, ThemeProvider} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import { User } from "../types/types"
import { useUserTypes } from "../types/types";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../components/loader/Loader";
import { themeLogin } from "../assets/themes";

export const Login = () => {
    const { user, login, hasLoading, loggedIn } = useUser() as useUserTypes;
    const [form, setForm] = useState<User>({ id: "", user: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn !== true) return;
        navigate("/employees/list-employees");
    }, [user, loggedIn])

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        login(form);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value, id: uuidv4() })
    }

    const handleCopy = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        alert("No puedes copiar nada del usuario.")
    }

    const handleCut = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        alert("Tienes que escribir el usuario y contraseña.")
    }

    return (
        <ThemeProvider theme={themeLogin}>
            <Container component="main" maxWidth="xs" sx={{ mt: 15, borderRadius: "7%" }}>
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar sx={{ m: 1 }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField required fullWidth onPaste={handleCut} onCopy={handleCopy} onChange={handleChange} value={form.user} margin="normal" id="user" label="Usuario" name="user" autoFocus />
                        <TextField required fullWidth onCut={handleCut} onCopy={handleCopy} onChange={handleChange} value={form.password} margin="normal" name="password" label="Contraseña" type="password" id="password" />
                        <Button type="button" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Aceptar
                        </Button>
                        {hasLoading && <Loader />}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;