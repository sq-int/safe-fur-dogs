import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecondaryHeading } from '../../styles/global/type';
import { DocContainer } from '../../styles/global/structure';

/* assets */
import Back from '../../assets/Back.svg';

export default function PrivacyPolicy() {

    const history = useHistory();

    return (
        <DocContainer>

            <div className="go-back">
                <div className="arrow">
                    <img onClick={() => {
                        history.goBack();
                    }} src={Back} alt="Go Back" />
                </div>
            </div>

            <SecondaryHeading>Privacy Policy</SecondaryHeading>

            <p className="last-updated">Last updated on May 9th, 2020</p>

            <p>When you visit Safe Fur Dogs, certain data is collected about your device, including
            information related to your web browser, IP address, time zone, and some cookies that are installed
            on your current device.</p>

            <p>This data is collected using Google Analytics. If you would like to opt out of data collection, please visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics' Opt-out Borwser Add-on page</a>.</p>

            <h3>Changes and Modifications</h3>
            <p>Safe Fur Dogs reserves the right to update this privacy policy at any time to reflect changes to our practices, service, or for other operational, legal, or regulatory reasons.</p>

            <h3>Contact Us</h3>
            <p>To get in contact with us for more information about our privacy practices, or if you have questions or complaints, please contact
            us by email at safefurdogs@gmail.com.</p>
        </DocContainer>
    )
}
