import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import { FilterLabel, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

    return(
      <FilterLabel>
        Find contacts by name
        <br />
        <Input type="text"
        value={filter}
        onChange={changeFilter}
        name="filter"
        />
    </FilterLabel>  
    )
};
