
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombres', width: 180 },
    { field: 'last_name', headerName: 'Apellidos', width: 180 },
    {
      field: 'birthday',
      headerName: 'Cumpleaños!',
      type: 'Date',
      width: 180,
    },
    {
      field: 'nombre',
      headerName: 'Nombre completo',
      description: 'Esta columna no es ordenable.',
      sortable: false,
      width: 600,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.name || ''} ${params.row.last_name || ''}`,
    },
  ];
  export default columns;