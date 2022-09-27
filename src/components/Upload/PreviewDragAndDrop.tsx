import { IPreviewProps } from "react-dropzone-uploader"
import { Typography, Grid } from '@mui/material';
export const PreviewDragAndDrop = ({ meta }: IPreviewProps) => {
    const { name, percent, status }: IPreviewProps["meta"] = meta;
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={12} lg={12} sm={12}>
                    <Typography variant="h6" gutterBottom>
                        {name}, {Math.round(percent)}% {status === "done" ?
                            <Typography variant="button" color={"success.main"} display="block" gutterBottom>
                                Éxito
                            </Typography> : <Typography color={"error.main"} variant="button" display="block" gutterBottom>
                                Error
                            </Typography>}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
export default PreviewDragAndDrop;