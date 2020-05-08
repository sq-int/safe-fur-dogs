import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddFood() {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        axios.post(`${process.env.REACT_APP_API}/api/request`, data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <h3>Submit Food to our Collection</h3>

            <p>There is <strong>A LOT</strong> of food and snacks that our pups can get into or that they can be given. Becuse of this, it's virtually impossible
        for us to compile a complete list of <strong>all</strong> food in the world. However, with dedicated research and help from the community, we can compile
        as complete of a list to be used as a resource and references as possible.</p>

            <p>That's where you come in! It's as simple as entering in the food or snack that you want to add to our collection, and then select whether or not it
            is safe or not for our furry companions to eat.</p>

            <p>Once we receive this information, our team will do our due dilegence to research that specific food or snack so we can display accurate information
            to users who may search that particular item. We greatly thank you for your help!</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>What Food do We Need to Add?</h4>
                <input type="text" name="food" placeholder="Food Name" ref={register({ required: true })} />

                <h4>Is It Safe for Dogs to Consume?</h4>
                <label className="container">Yes
                <input type="radio" name="safe" value="yes" ref={register({ required: true })} />
                    <span className="checkmark"></span>
                </label>
                <label className="container">No
                <input type="radio" name="safe" value="no" ref={register({ required: true })} />
                    <span className="checkmark"></span>
                </label>

                <div className="form-controls">
                    <button type="submit">Submit Information</button>
                </div>
            </form>
        </>
    )
}
