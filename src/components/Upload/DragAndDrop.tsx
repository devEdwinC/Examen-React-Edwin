import Dropzone from "react-dropzone-uploader"
import { Grid, Paper, Button } from "@mui/material";
import PersonalInputFile from "./InputFile";
import { getDroppedOrSelectedFiles } from "../../helpers/html-5-file-selector";
import { Example } from "./CarouselComponent";
import React, { useState } from 'react';
import PreviewDragAndDrop from "./PreviewDragAndDrop";
import { IFileWithMeta } from "react-dropzone-uploader"
import { FileItem } from "../../types/types";

export const CustomPreview = () => {
  const [items, setItems] = useState<Array<FileItem>>([])

  const handleSubmit = (files: IFileWithMeta[], allFiles: IFileWithMeta[]) => {
    //Aqui se obtienen todos los archivos en caso de querer subir a algun storage, en este caso de prueba yo los borro.
    items.forEach((f)=>URL.revokeObjectURL(f.src))
    allFiles.forEach((f) => f.remove())
    setItems([]);
  }

  return (
    <>
      <Grid container mt={12}>
        <Dropzone
          submitButtonContent="Enviar"
          accept="image/*"
          getUploadParams={() => ({ url: 'https://httpbin.org/post' })}
          onSubmit={handleSubmit}
          PreviewComponent={PreviewDragAndDrop}
          getFilesFromEvent={(e) => {
            getDroppedOrSelectedFiles(e).then((file: []) => {
              file.map((f: any) => {
                let objectUrl = URL.createObjectURL(f.fileObject);
                setItems(current => [...current, { name: f.name, src: objectUrl }]);
              })
            })
            return new Promise(resolve => {
              getDroppedOrSelectedFiles(e).then((chosenFiles: []) => {
                resolve(chosenFiles.map((f: any) => f.fileObject))
              })
            })
          }}
          InputComponent={PersonalInputFile}
        />
        {items.length > 0 && <Example items={items} /> }
      </Grid>
    </>
  )
}

export default CustomPreview;