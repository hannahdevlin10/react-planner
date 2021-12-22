import React, { useContext } from "react";
import { Button } from "@mui/material";
import { PlannerContext } from "../../../Context/mainContext";

export default function DeleteEvent () {
    const { toggleModal } = useContext(PlannerContext);
    return (
        <div>
            <div>
                <h3>Are you sure you want to delete this?</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={() => toggleModal(false)} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => toggleModal(false)} variant="contained" color="warning">
                    Delete
                </Button>
            </div>
        </div>
    )
}