import React, { useContext } from "react";
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PlannerContext } from "../../../Context/mainContext";

import { useDispatch } from "react-redux";
import { eventDeleted } from "../../../Redux/events/eventsSlice";

export default function PlanItem ({ id, title, description, date }) {
    const dispatch = useDispatch();
    const { setActiveModal, toggleModal, setActiveEventID } = useContext(PlannerContext);

    const handleClickEdit = (id) => {
        setActiveEventID(id);
        toggleModal(true);
        setActiveModal('Edit');
    }

    const convertDate = (timestamp) => {
        const date = new Date(timestamp * 1).toDateString();
        return String(date);
    }

    return (
        <div style={{ margin: 8 }}>
            <Card>
                <CardHeader
                    title={title}
                    subheader={convertDate(date)} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                       {description}
                    </Typography>
                    <CardActions disableSpacing>
                        <IconButton onClick={() => handleClickEdit(id)} aria-label="edit plan">
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => dispatch(eventDeleted({ id }))} aria-label="delete plan">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}