import React from 'react';
import { Link } from 'react-router-dom';

import { SecondaryHeading } from '../../styles/global/type';
import { DocContainer } from '../../styles/global/structure';

export default function Docs() {
    return (
        <DocContainer>
            <SecondaryHeading>Docs</SecondaryHeading>

            <h3>Privacy Policy</h3>
            <p><Link to="/privacy-policy">Safe Fur Dogs Privacy Policy</Link></p>

            <h3>Terms of Service</h3>
            <p><Link to="/terms-of-service">Safe Fur Dogs Terms of Service</Link></p>
        </DocContainer>
    )
}
