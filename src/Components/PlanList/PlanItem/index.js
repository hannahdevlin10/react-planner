import React from "react";
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PlanItem () {
    return (
        <div style={{ margin: 8 }}>
            <Card>
                <CardHeader
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit plan">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete plan">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}