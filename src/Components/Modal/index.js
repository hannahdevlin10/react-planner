import React, { useContext } from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { PlannerContext } from '../../Context/mainContext';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomModal () {
    const { modalOpen, toggleModal } = useContext(PlannerContext);
    function handleClose() {
        toggleModal(false); 
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    return (
        <div>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={modalOpen}
                >
                 <Box sx={style}>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           Add Event
                        </Typography>
                        <IconButton style={{ padding: 0, marginTop: -2 }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                     </div>
                    
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}