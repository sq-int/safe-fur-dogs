import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* actions */
import { searchActionTypes } from '../redux/actions/searchActions';

/* material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

/* styles */
import { ErrorButton, FoodErrorContent, FoodErrorTitle } from '../styles/food';

export default function AddFood() {

    /* bring in redux dispatch and config */
    const dispatch = useDispatch();

    /* action creators */
    const RESET_SEARCH = searchActionTypes.RESET_SEARCH;

    /* useHistory from react-router-dom configuration */
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        axios.post(`${process.env.REACT_APP_API}/api/request`, data)
            .then(res => {
                console.log('Thank you!');
            })
            .catch(err => {
                console.log(err);
            })

        setSubmitted(true);
    }

    /* the following function handles closing of
    the alert dialogue from Material-UI */
    const handleClose = () => {
        setSubmitted(false);
    };

    return (
        <>
            <h3>Submit Food to our Collection</h3>

            <p>There is <strong>A LOT</strong> of food and snacks that our pups can get into or that they can be given. Because of this, it's virtually impossible
        for us to compile a complete list of <strong>all</strong> food in the world. However, with dedicated research and help from the community, we can compile
        as complete of a list to be used as a resource and references as possible.</p>

            <p>That's where you come in! It's as simple as entering in the food or snack that you want to add to our collection, and then select whether or not it
            is safe or not for our furry companions to eat.</p>

            <p>Once we receive this information, our team will do our due dilegence to research that specific food or snack so we can display accurate information
            to users who may search that particular item. We greatly thank you for your help!</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>What Food do We Need to Add?</h4>
                <input type="text" name="food" placeholder="Food Name" ref={register({ required: true, pattern: /^[a-zA-Z0-9 ]+$/ })} autoComplete="off" />

                {errors.food && errors.food.type === 'required' && <p className="error">Please enter a valid food.</p>}
                {errors.food && errors.food.type === 'pattern' && <p className="error">Food should only contain letters and possibly numbers.</p>}

                <h4>Is It Safe for Dogs to Consume?</h4>
                <label className="container">Yes
                <input type="radio" name="safe" value="yes" ref={register({ required: true })} />
                    <span className="checkmark"></span>
                </label>
                <label className="container">No
                <input type="radio" name="safe" value="no" ref={register({ required: true })} />
                    <span className="checkmark"></span>
                </label>

                {errors.safe && errors.safe.type === 'required' && <p className="error">Please select yes or no for consumption safety.</p>}

                <div className="form-controls">
                    <button type="submit">Submit Information</button>
                </div>
            </form>

            {submitted === true &&
                <Dialog
                    open={submitted}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <FoodErrorTitle id="alert-dialog-title">{"Thank you!"}</FoodErrorTitle>
                    <DialogContent>
                        <FoodErrorContent id="alert-dialog-description">
                            Your information and request has been submitted and we will work on adding it!
                        </FoodErrorContent>
                    </DialogContent>
                    <DialogActions>
                        <ErrorButton onClick={() => {
                            setSubmitted(true);
                            dispatch({ type: RESET_SEARCH });
                            history.push(`/`);
                        }} color="primary">
                            Go Home
                        </ErrorButton>
                    </DialogActions>
                </Dialog>}
        </>
    )
}
