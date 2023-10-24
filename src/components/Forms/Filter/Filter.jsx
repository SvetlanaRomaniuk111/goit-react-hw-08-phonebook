import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'store/contact/slice';
import css from './Filter.module.css';

const FormFilterContact = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="inputName" className={css.form_label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className={css.form_control}
        id="inputName"
      />
    </div>
  );
};

export default FormFilterContact;
