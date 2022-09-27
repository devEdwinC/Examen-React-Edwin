import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import { UserContextType } from "../types/types";
import { CurrentState } from "../types/types";
import { User } from "../types/types";

const CREDENTIALS = {user: "Edwin", password: "12345678"}
export const useUser = () => {
    const { user, setUser, loggedIn, setLoggedIn } = useContext(Context) as UserContextType;
    const [currentState, setCurrentState] = useState<CurrentState>({ loading: false, error: false, message: "" });

    const login = useCallback((data: User) => {
        setCurrentState({ loading: true, error: false, message: "Revisando sus credenciales..." });
        setLoggedIn(false);
        setTimeout(() => {
            if (data.user !== CREDENTIALS.user || data.password !== CREDENTIALS.password) return setCurrentState({ loading: false, error: true, message: "Credenciales incorrectas." }), setLoggedIn(false);
            setLoggedIn(true);
            setUser(data);
            setCurrentState({ loading: false, error: false, message: "Sesión iniciada con éxito." });
        }, 2000);//SIMULANDO EL INICIO DE SESION A UNA FECTCH API
    }, [user]);

    const logout = useCallback(() => {
        setLoggedIn(false);
    }, [loggedIn]);

    return {
        login,
        logout,
        user,
        setUser,
        hasLoading: currentState.loading,
        hasError: currentState.error,
        loggedIn,
        setLoggedIn
    };
}
export default useUser;