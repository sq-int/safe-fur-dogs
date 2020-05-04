import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/* material UI */
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

/* actions */
import { searchActionTypes } from '../../actions/searchActions';

/* styles */
import { HeaderContainer } from '../../styles/header';

/* assets */
import Coffee from '../../assets/Coffee.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

export default function Header() {

    /* bring in redux dispatch */
    const dispatch = useDispatch();

    /* action creators */
    const RESET_SEARCH = searchActionTypes.RESET_SEARCH;

    return (
        <HeaderContainer>
            <div className="coffee">
                <LightTooltip title="Buy Me a Coffee"><a target="_blank" rel="noopener noreferrer" href="http://buymeacoff.ee/alexlc"><img src={Coffee} alt="Buy Me a Coffee" /></a></LightTooltip>
                <LightTooltip title="Twitter"><a target="_blank" rel="noopener noreferrer" href="http://twitter.com/safefurdogs"><img src={Twitter} alt="Twitter" /></a></LightTooltip>
                <LightTooltip title="Instagram"><a target="_blank" rel="noopener noreferrer" href="http://instagram.com/safefurdogs"><img src={Instagram} alt="Instagram" /></a></LightTooltip>
            </div>
            <nav>
                <Link onClick={() => dispatch({ type: RESET_SEARCH })} to="/">Home</Link>
            </nav>
        </HeaderContainer>
    )
}
