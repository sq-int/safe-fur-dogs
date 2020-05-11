import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecondaryHeading } from '../../styles/global/type';
import { DocContainer } from '../../styles/global/structure';

/* assets */
import Back from '../../assets/Back.svg';

export default function TermsOfService() {

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


            <SecondaryHeading>Terms of Service</SecondaryHeading>
            <p className="last-updated">Last updated May 9th, 2020</p>

            <p>This website is operated by Safe Fur Dogs. Safe Fur Dogs is referred to using the terms "we", "us", and "our" throughout the web application. Safe Fur Dogs offers this application, including all information, resources, tools, and services, free to you, the user, based on your acceptance of all terms, conditions, policies, and notices stated within this document.</p>

            <p>By visiting our website, you utilize the service we provide, and agree to be bound by the following terms and conditions, including any additional terms and conditions or policies referenced here or available by hyperlink. This also includes future revisions of the terms and conditions. These terms and conditions apply to all users of the website.</p>

            <p>Please read the following Terms of Service carefully and in completion before accessing or utilizing the Safe Fur Dogs website. If you do not agree to all of the terms and conditions expressly stated in this agreement, then you may not utilize the web application or access any of our services.</p>

            <p>Any new features, tools, or resources added to the website in the future will also be subject to the Terms of Service. You may review the most recent and current version of the terms and conditions on this page at any time. We reserve the right to update, change, or replace any part of this document by posting or making updates and or changes to our website. It is your responsibility to keep up to date with this document and its change history.</p>

            <h3>General Conditions</h3>
            <p>We reserve the right to refuse service to anyone for any reason at any time.</p>

            <p>As Safe Fur Dogs is a free online database of information, we must limit the amount of searches made due to server and hosting costs. If a user is found to be abusing the search functionality and submitting an excessive amount of searches, we reserve the right to halt incoming connections from the individual.</p>

            <h3>Liability</h3>
            <p>Safe Fur Dogs uses external sources and references to provide the safety decision displayed when searching for a particular food. Sources and references used are from reputable websites and databases.</p>

            <p>As with any consumption, however, experiences and reactions vary from animal to animal. You should always make sure to consult a veterinarian to determine if your dog is allergic or sensitive to a particular food. Safe Fur Dogs is not liable for any injury, fatality, or harm that may result from feeding your dog a food that a user searched for through our database of information.</p>
        </DocContainer>
    )
}
