import { Typography } from "@mui/material";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export const PersonalLogo = () => {
    return (
        <>
            <HistoryEduIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                EXAMEN REACT
            </Typography>
        </>
    );
};


export const PersonalLogoMobile = () => {
    return (
        <>
            <HistoryEduIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Examen React
            </Typography>
        </>
    );
};