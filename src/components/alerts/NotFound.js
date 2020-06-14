import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/* actions */
import { searchActionTypes } from '../../redux/actions/searchActions';

/* material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

/* styles */
import { ErrorButton, FoodErrorContent, FoodErrorTitle } from '../../styles/food';

export default function NotFound() {

    /* useHistory from react-router-dom configuration */
    const history = useHistory();

    /* bring in redux dispatch and config */
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    /* action creators */
    const RESET_SEARCH = searchActionTypes.RESET_SEARCH;

    /* state for whether or not the alert is open or not */
    const [open, setOpen] = useState(true);

    /* the following function handles closing of
        the alert dialogue from Material-UI */
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {state.limit === false &&
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
                            dispatch({ type: RESET_SEARCH });
                            history.push(`/`);
                        }} color="primary">
                            Go Home
                        </ErrorButton>
                        <ErrorButton onClick={handleClose} color="primary" autoFocus>
                            Help Add It!
                        </ErrorButton>
                    </DialogActions>
                </Dialog>}

            {state.limit === true &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <FoodErrorTitle id="alert-dialog-title">{"Slow down, cowboy!"}</FoodErrorTitle>
                    <DialogContent>
                        <FoodErrorContent id="alert-dialog-description">
                            Because Safe Fur Dogs is a free service, we must limit the amount of searches made due to hosting costs. You have made
                             too many requests. Please wait a bit until making another search or consider <a target="_blank" rel="noopener noreferrer" href="http://buymeacoff.ee/alexlc">buying me a coffee</a> so our limits can be increased. Sorry for the inconvenience!
                        </FoodErrorContent>
                    </DialogContent>
                    <DialogActions>
                        <ErrorButton onClick={() => {
                            handleClose();
                            dispatch({ type: RESET_SEARCH });
                            history.push(`/`);
                        }} color="primary">
                            Go Home
                        </ErrorButton>
                    </DialogActions>
                </Dialog>}
        </div>
    )
}
