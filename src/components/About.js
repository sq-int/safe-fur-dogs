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

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">As a dog owner, "Can she eat this?" was a reoccurring question I found myself asking
                whenever I had some snack or treat in hand. My furry pal definitely believes that she is
                entitled to anything I am eating. Luckily for her, I'm a pushover and a sucker for
                    the puppy dog eyes.</Paragraph>

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">Because of this, I always found myself frantically Googling if <em>x</em> or <em>y</em> food was safe for my dog to consume. Although
                there are some awesome resources out there that give great detail on the safety of particular foods, it seemed
                like there wasn't one single application that allowed the user to search for a certain type of food to quickly
                    find out if it is safe or not.</Paragraph>

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">This became my motivation behind creating Safe Fur Dogs, a gateway to discovering the safety of food, treats, and snacks, so that you
                can definitely still sift through long articles, but you can also quickly get that general consensus answer of whether or not it is safe
                    for dogs to eat the what you searched for.</Paragraph>

                <Paragraph fontSize="1.6rem" lineHeight="2rem" margin="0 0 2rem 0">As a growing developer, it has become a passion side project that I would like to
                continue to build to help other dog owners quickly find the answer they need, just as I needed it.</Paragraph>
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
