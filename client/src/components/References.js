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
                            <h5><Link to={r[1]}>{r[0]}</Link></h5>
                        </div>
                    </Resource>
                )
            })}
        </ResourceContainer>
    )
}
