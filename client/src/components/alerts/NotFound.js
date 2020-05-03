import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/* material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

/* styles */
import { ErrorButton, FoodErrorContent, FoodErrorTitle } from '../../styles/food';

export default function NotFound() {

    /* useHistory from react-router-dom configuration */
    const history = useHistory();

    /* state for whether or not the alert is open or not */
    const [open, setOpen] = useState(true);

    /* the following function handles closing of
        the alert dialogue from Material-UI */
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <FoodErrorTitle id="alert-dialog-title">{"Oops, we don't have that food yet!"}</FoodErrorTitle>
                <DialogContent>
                    <FoodErrorContent id="alert-dialog-description">
                        That food item does not currently exist in our database. Would you like to help us add it or return home and make another search?
                    </FoodErrorContent>
                </DialogContent>
                <DialogActions>
                    <ErrorButton onClick={() => {
                        handleClose();
                        history.push(`/`);
                    }} color="primary">
                        Go Home
                    </ErrorButton>
                    <ErrorButton onClick={handleClose} color="primary" autoFocus>
                        Help Add It!
                    </ErrorButton>
                </DialogActions>
            </Dialog>
        </div>
    )
}
