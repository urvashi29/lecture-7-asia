import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { onModal } from '../../../actions';

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

const ModalDisplay = ({ modal }) => {

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(onModal(false));
    }

    return (
        <div>
            <Modal
                open={modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thank you for regsitering with us.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your account is successfullt created.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalDisplay;