import React from 'react';
import { Link } from 'react-router-dom';

/* assets */
import Lightbulb from '../assets/Lightbulb.svg';

/* styles */
import { ResourceContainer, Resource } from '../styles/food';

export default function References(props) {

    const { resources } = props;

    return (
        <ResourceContainer>
            {resources.map((r, idx) => {
                return (
                    <Resource key={idx}>
                        <div className="img">
                            <img src={Lightbulb} alt="Reference" />
                        </div>

                        <div className="content">
                            <h5><a target="_blank" rel="noopener noreferrer" href={r[1]}>{r[0]}</a></h5>
                            <p>{r[2]}</p>
                            <div className="read-more">
                                <span><a target="_blank" href={r[1]} rel="noopener noreferrer">Read more...</a></span>
                            </div>
                        </div>
                    </Resource>
                )
            })}
        </ResourceContainer>
    )
}
