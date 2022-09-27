import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper, Button } from "@mui/material";
import CustomPreview from './DragAndDrop';
import { FileItem } from "../../types/types";
import Item from "./Item"

interface CarouselProps {
    items: FileItem[]
}
export function Example({ items }: CarouselProps) {
    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={5} lg={5} sm={12} ml={2}>
                    <Carousel
                        sx={{ mt: 1 }}
                        fullHeightHover={true}
                        indicatorContainerProps={{
                            style: {
                                marginTop: '50px', // 5
                                textAlign: 'center' // 4
                            }

                        }}
                    >
                        {items.map(({name, src}: FileItem, i: any) => <Item key={i} name={name} src={src} />)}
                    </Carousel>
                </Grid>
            </Grid>
        </Grid>
    )
}