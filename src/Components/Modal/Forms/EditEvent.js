import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { PlannerContext } from '../../../Context/mainContext';

export default function EditEvent () {
    const { toggleModal } = useContext(PlannerContext);
    return (
        <div>
            <div>
                Edit form goes here ..
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={() => toggleModal(false)} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => toggleModal(false)} variant="contained" color="warning">
                    Submit
                </Button>
            </div>
        </div>
    )
}