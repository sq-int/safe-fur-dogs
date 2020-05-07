import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Submit() {

    /* react-hook-form config */
    const { register, errors, handleSubmit } = useForm();

    /* new food */
    const [food, setFood] = useState({
        food: '',
        safe: '',
        img: '',
        summary: '',
        resources: []
    })

    /* handle input change */
    const inpChange = (e) => {
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });
    }

    /* handle submit */
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="food"
                    placeholder="Food Name"
                    autoComplete="off"
                    ref={register({ required: true, pattern: /^[A-Za-z]+$/ })}
                />

                <input
                    type="text"
                    name="safe"
                    placeholder="Is it safe?"
                    autoComplete="off"
                    ref={register({ required: true, pattern: /^[A-Za-z]+$/ })}
                />

                <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    autoComplete="off"
                    ref={register({ required: true })}
                />

                <input
                    type="text"
                    name="food"
                    placeholder="Food Name"
                    autoComplete="off"
                    ref={register({ required: true, pattern: /^[A-Za-z]+$/ })}
                />
            </form>
        </div>
    )
}
