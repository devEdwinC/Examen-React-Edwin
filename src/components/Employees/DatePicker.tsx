import { Grid, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Dayjs } from 'dayjs';
import esMX from 'dayjs/locale/es-mx';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
interface DataPickerProps {
    handleChangeDatePicker: (newValue: Dayjs | null) => void
    value: Dayjs | null
}
export const DatePicker = ({ handleChangeDatePicker, value }: DataPickerProps) => {
    return (
        <Grid item xs={12} md={7} lg={7} sm={12}>
            <LocalizationProvider locale={esMX} dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <MobileDatePicker
                        label="Selecciona tu fecha de nacimiento"
                        inputFormat="YYYY/MM/DD"
                        value={value}
                        onChange={handleChangeDatePicker}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
        </Grid>
    );
}

export default DatePicker;