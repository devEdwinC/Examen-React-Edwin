import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../pages/AppBar";
import useUser from "../hooks/useUser";
import { useUserTypes } from "../types/types";
const PrivateRoutes = () => {
    const { loggedIn } = useUser() as useUserTypes;
    return (
        (loggedIn) === true ? <> <MainLayout /> <Outlet/> </> : <Navigate to="/login" />
    )
}
export default PrivateRoutes;