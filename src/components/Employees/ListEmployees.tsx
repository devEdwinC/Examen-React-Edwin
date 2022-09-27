import { useEffect, useState } from "react";
import getEmployes from "../../services/getEmployes";
import { IListEmployees } from "../../types/types";
import { DataGrid, esES } from '@mui/x-data-grid';
import columns from "./Colums";
import NewEmployee from "./NewEmployee";
import { Grid, Typography } from "@mui/material";


export const ListEmployees = () => {
    const [listEmployees, setListEmployees] = useState<IListEmployees["data"]["employees"]>([])
    useEffect(() => {
        getEmployes("Edwin Contreras").then((res: IListEmployees) => {
            let data = res.data.employees
            const result = data.map((el) => {//Parseando las fechas porque llegan en ENTEROS
                return { ...el, birthday: new Date(el.birthday).toLocaleDateString() }
            });
            setListEmployees(result);
        }).catch((err) => {
            alert(err);
        })
    }, [])

    return (
        <Grid container mt={10}>
            <Grid item xs={12} md={10} lg={10} sm={12} mt={4} ml={2}>
                <NewEmployee setListEmployees={setListEmployees} listEmployees={listEmployees} />
                <div style={{ height: 400, width: '100%' }}>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ flexGrow: 1 }}>
                            <Typography color={"warning.main"} variant="subtitle2" gutterBottom>
                                Haz click en algún encabezado para filtrar los datos.
                            </Typography>
                            <DataGrid
                                loading={listEmployees.length === 0}
                                rows={listEmployees}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
                                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                            />
                        </div>
                    </div>
                </div >
            </Grid>
        </Grid>

    );
}

export default ListEmployees;