import React from 'react';

// styles
import { Contain } from '../styles/global/structure';
import { HeadTwo } from '../styles/global/type';

export default function About() {
    return (
        <Contain width="80%" display="flex" direction="column" align="center">
            <HeadTwo fontSize="3rem" fontWeight="600" color="#444444">About Safe Fur Dogs</HeadTwo>
        </Contain>
    )
}
