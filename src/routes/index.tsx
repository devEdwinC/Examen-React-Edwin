import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import CustomPreview from "../components/Upload/DragAndDrop";
import BackdrodPersonal from "../components/loader/BackdropPersonal";
const LazyListEmployees = React.lazy(() => import("../components/Employees/ListEmployees"))


function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/employees/list-employees" element={<React.Suspense fallback={<BackdrodPersonal />}> <LazyListEmployees /></React.Suspense>} />
        <Route path="/images/upload-image" element={<CustomPreview />} />
        <Route path='*' element={<Navigate to="/employees/list-employees" />} />
      </Route>
      <Route path='*' element={<Navigate to="/login" />} />
    </Routes>
  );
}
export default CustomRoutes;
