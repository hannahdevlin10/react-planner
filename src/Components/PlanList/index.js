import React, { useContext, useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { PlannerContext } from '../../Context/mainContext';
// import PlanItem from "./PlanItem";

function PlanList () {
    const { toggleModal, setActiveModal, activeModal } = useContext(PlannerContext);
    
    const handleClick = () => {
        setActiveModal('Create');
        toggleModal(true);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky' }}>
                <h2 style={{ letterSpacing: '1.5px', marginTop: 25 }}>
                    Upcoming Events
                </h2>
                <span style={{ marginTop: 21 }}>
                    <Tooltip title="Add Event" placement="top" arrow>
                        <IconButton onClick={handleClick}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Tooltip>
                </span>
            </div>
            <div style={{ height: '83vh', overflowX: 'scroll' }}>
               {/* <PlanItem /> */}
            </div>
        </div>
    )
}

export default PlanList;
