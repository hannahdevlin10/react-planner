import React, { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { PlannerContext } from '../../Context/mainContext';
import PlanItem from "./PlanItem";

function PlanList () {
    const { toggleModal } = useContext(PlannerContext);
    
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky' }}>
                <h2 style={{ letterSpacing: '1.5px', marginTop: 25 }}>
                    Upcoming Events
                </h2>
                <span style={{ marginTop: 21 }}>
                    <Tooltip title="Add Event" placement="top" arrow>
                        <IconButton onClick={() => toggleModal(true)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Tooltip>
                </span>
            </div>
            <div style={{ height: '83vh', overflowX: 'scroll' }}>
               <PlanItem />
               <PlanItem />
               <PlanItem />
               <PlanItem />
               <PlanItem />
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       setModalOpen: (open) => dispatch(setModalOpen(open))
//     };
//   };

//   export default connect(null, mapDispatchToProps)(PlanList);

export default PlanList;
