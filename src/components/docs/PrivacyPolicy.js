import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecondaryHeading } from '../../styles/global/type';
import { Contain, GoBack } from '../../styles/global/structure';
import { Paragraph, HeadTwo, HeadThree } from '../../styles/global/type';

/* assets */
import Back from '../../assets/Back.svg';

export default function PrivacyPolicy() {

    const history = useHistory();

    return (
        <Contain width="80%">
            <GoBack>
                <div className="arrow">
                    <img onClick={() => {
                        history.goBack();
                    }} src={Back} alt="Go Back" />
                </div>
            </GoBack>

            <HeadTwo fontSize="4rem" fontWeight="800" color="#444444" margin="0 0 2rem 0">
                Privacy Policy
            </HeadTwo>

            <Paragraph fontSize="1.2rem" margin="0 0 2rem 0">Last updated on May 9th, 2020</Paragraph>

            <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">When you visit Safe Fur Dogs, certain data is collected about your device, including
            information related to your web browser, IP address, time zone, and some cookies that are installed
            on your current device.</Paragraph>

            <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">This data is collected using Google Analytics. If you would like to opt out of data collection, please visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics' Opt-out Borwser Add-on page</a>.</Paragraph>

            <HeadThree fontSize="2.4rem" fontWeight="700" color="#444444" margin="0 0 1rem 0">Changes and Modifications</HeadThree>
            <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">Safe Fur Dogs reserves the right to update this privacy policy at any time to reflect changes to our practices, service, or for other operational, legal, or regulatory reasons.</Paragraph>

            <HeadThree fontSize="2.4rem" fontWeight="700" color="#444444" margin="1rem 0 1rem 0">Contact Us</HeadThree>
            <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">To get in contact with us for more information about our privacy practices, or if you have questions or complaints, please contact
            us by email at safefurdogs@gmail.com.</Paragraph>
        </Contain>
    )
}
