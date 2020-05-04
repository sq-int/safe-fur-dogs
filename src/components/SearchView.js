import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

/* actions */
import { searchActionCreators } from '../actions';

/* styles */
import { SearchBox } from '../styles/global/structure';
import { MainHeading, SearchLoadingMessage } from '../styles/global/type';
import { MainSearch } from '../styles/global/forms';

/* assets */
import Search from '../assets/Search.svg';

function SearchView() {

  /* redux config */
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  /* history and params */
  const history = useHistory();

  /* configure react-hook-form */
  const { register, errors, handleSubmit } = useForm();

  /* action creators */
  const searchItem = searchActionCreators.searchItem;

  /* handle form submission */
  const onSubmit = (data) => {
    dispatch(searchItem(data.query, () => history.push(`/${data.query}`)));
  }

  /* react-spring configuration */
  const contentProps = useSpring({
    opacity: state.loading ? 1 : 0,
    marginLeft: state.loading ? 0 : -500
  });

  return (
    <SearchBox>
      {console.log('CURRENT STATE ', state)}
      <MainHeading>Safe Fur Dogs</MainHeading>

      <MainSearch onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="query"
          ref={register()}
          autoComplete="off"
        />
        <button type="submit"><img src={Search} alt="Search" /></button>
      </MainSearch>

      {state.loading === true && <SearchLoadingMessage style={contentProps}>Searching...</SearchLoadingMessage>}
    </SearchBox>
  );
}

export default SearchView;
