import { createTheme } from "@mui/material/styles";
export const themeLogin = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#eee",
          backgroundImage: `linear-gradient(90deg, rgba(69, 156, 193, 1) 7%, rgba(252, 232, 70, 0.9108018207282913) 93%)`,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffff",
        },
      },
    },
  },
});


export const themeNewEmployee = createTheme(
  {
    //...
  },
  {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: {
            cancelButtonLabel: 'Cancelar',
            okButtonLabel: 'Aceptar',
          },
        },
      },
    },
  }
)