// react
import React from 'react';
// Link for routing - react-router-dom
import { Link } from 'react-router-dom';

// styles
import { Contain, Block } from '../styles/global/structure';
import { HeadTwo, Paragraph } from '../styles/global/type';
import { DocContainer, DocTitle } from '../styles/global/structure';

export default function About() {
    return (
        <Contain width="80%" display="flex" direction="column" align="center" margin="5rem 0 0 0">
            <Block display="flex" direction="column">
                <HeadTwo fontSize="4rem" fontWeight="800" color="#444444" margin="0 0 2rem 0">
                    About Safe Fur Dogs
                </HeadTwo>

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">
                    Safe Fur Dogs was built with the intent to make it easier to quickly determine if a particular food is safe for 
                    a dog to eat. Through inspiration drawn through the puppy dog eyes of my furry companion Eevee anytime I was snacking, 
                    I wanted to make an easy to use application that would give dog owners the general consensus of whether or not a food 
                    was safe for consumption without having to sift through long winded articles.
                </Paragraph>

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">
                    Safe Fur Dogs is not meant to be a replacement for recommendations from a veterinarian as all dogs are different and 
                    could have differing reactions to different foods. It is always recommended that you consult a veterinarian before feeding 
                    your dog something you are unsure about.
                </Paragraph>

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">
                    On all searches through Safe Fur Dogs, we provide links to high quality resources where you can read more detailed 
                    facts on the food you are searching and its known interactions with dogs if you choose.
                </Paragraph>
            </Block>

            <Block display="flex" direction="column" margin="5rem 0 0">
                <HeadTwo fontSize="4rem" fontWeight="800" color="#444444">
                    Documentation
                </HeadTwo>

                <DocContainer>
                    <DocTitle color="#24767A" margin="2rem 0 0 0">Terms of Service</DocTitle>
                    <p><Link to="/terms-of-service">Terms of Service</Link></p>

                    <DocTitle color="#24767A">Privacy Policy</DocTitle>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                </DocContainer>
            </Block>
        </Contain>
    )
}
