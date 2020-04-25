import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

/* styles */
import { Container, Content } from '../styles/global/structure';
import { MainHeading } from '../styles/global/type';
import { MainSearch } from '../styles/global/forms';

/* assets */
import Search from '../assets/Search.svg';

function SearchView() {

  /* redux config */
  const dispatch = useDispatch();

  /* configure react-hook-form */
  const { register, errors, handleSubmit } = useForm();

  /* handle form submission */
  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: 'START_SEARCH' });
    dispatch({ type: 'SEARCH_SUCCESS', payload: data });
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
