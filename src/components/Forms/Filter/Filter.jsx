import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'store/contact/slice';

const FormFilterContact = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };
  return (
    <div className="mb-3">
      <label htmlFor="inputName" className="form-label">
        Find contacts by name
      </label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="form-control"
        id="inputName"
      />
    </div>
  );
};

export default FormFilterContact;
