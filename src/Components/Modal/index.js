import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { PlannerContext } from '../../Context/mainContext';
import CloseIcon from '@mui/icons-material/Close';
import EditEvent from './Forms/EditEvent';
import CreateEvent from './Forms/CreateEvent';
import './style.css';

export default function CustomModal () {
    const { modalOpen, toggleModal, activeModal, setActiveModal, selectedDate, setSelectedDate } = useContext(PlannerContext);
    const [modalHeader, setModalHeader] = useState(null);

    function handleClose() {
        toggleModal(false); 
        setActiveModal(null);
        setSelectedDate(null);
    }

    const convertDate = (timestamp) => {
        const date = new Date(timestamp * 1).toDateString();
        return String(date);
    }

    useEffect(() => {
        switch (activeModal) {
            case 'Create':
                setModalHeader('Create Event');
                break;
            case 'Delete':
                setModalHeader('Delete Event');
                break;
            case 'Edit':
                setModalHeader('Edit Event');
                break;
            default:
                break;
        }    
    }, [activeModal]);
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
                onBackdropClick={() => toggleModal(false)}
                >
                 <Box sx={style} style={{ width: activeModal === 'Create' || activeModal === 'Edit' ? 605 : 400 }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {modalHeader && selectedDate ? (
                              modalHeader + ' for ' + convertDate(selectedDate)
                          ) : (
                            modalHeader
                          )} 
                        </Typography>
                        <IconButton style={{ padding: 0, marginTop: -2 }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                     </div>
                       {
                           activeModal === 'Edit' ? (
                               <EditEvent />
                           ) : activeModal === 'Create' ? (
                               <CreateEvent />
                           ) : ''
                       }
                </Box>
            </Modal>
        </div>
    )
}