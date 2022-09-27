import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper, Button } from "@mui/material";
import CustomPreview from './DragAndDrop';
import { FileItem } from "../../types/types";
export function Item({ name, src }: FileItem) {
    return (
        <Paper>
            <img
                src={src}
                width={300}
                height={300}
                loading="lazy"
            />
        </Paper>
    )
}

export default Item;