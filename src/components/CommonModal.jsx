import { useState, useEffect, useRef } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

const CommonModal = (props) => {
    return (
        <Modal
                open={props.modalOpen}
                onClose={props.modalClose}
                aria-labelledby="baggageModal"
                aria-describedby="baggageModalDescription"
            >
                <Box sx={style}>
                    <div>
                        <h4 className="float-left">Seat Info</h4>
                    </div>
                    <h5>Cabin:</h5>
                    <span className='lead'><b>{props.cabin}</b></span>
                    <h5>Seat Number:</h5>
                    <span className='lead'><b>{props.number}</b></span>
                    <h5>Seat Status:</h5>
                    <span className='lead'><b>{props.status}</b></span>
                </Box>
        </Modal>    
    );
};

export default CommonModal;