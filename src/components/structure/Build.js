import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Build() {

    /* configure react-hook-form */
    const { register, errors, handleSubmit } = useForm();

    /* history */
    const history = useHistory();

    const [u, setU] = useState({
        un: '',
        p: ''
    });

    const inpChange = (e) => {
        setU({
            ...u,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (data) => {
        axiosWithAuth().post(`${process.env.REACT_APP_API}${process.env.REACT_APP_CONN}`, data)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                history.push(`${process.env.REACT_APP_FOOD}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', height: '25rem', justifyContent: 'space-evenly' }} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="un"
                    onChange={inpChange}
                    autoComplete="off"
                    ref={register({ required: true, pattern: /^[A-Za-z]+$/ })}
                />
                <input
                    type="password"
                    name="p"
                    onChange={inpChange}
                    ref={register({ required: true })}
                />
                <button type="submit">go</button>
            </form>
        </div>
    )
}
