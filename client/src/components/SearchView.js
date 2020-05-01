import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* actions */
import { searchActionCreators } from '../actions';

/* styles */
import { Content } from '../styles/global/structure';
import { MainHeading } from '../styles/global/type';
import { MainSearch } from '../styles/global/forms';

/* assets */
import Search from '../assets/Search.svg';

function SearchView() {

  /* redux config */
  const dispatch = useDispatch();

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

  return (
    <Content>
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
    </Content>
  );
}

export default SearchView;
