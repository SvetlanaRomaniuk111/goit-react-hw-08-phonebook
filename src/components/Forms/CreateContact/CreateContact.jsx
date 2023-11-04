import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/contact/actions';
import { selectorCreateContacts } from 'store/contact/selectors';

const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);
  const contacts = useSelector(selectorCreateContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setPhone(value);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setIsValid(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone) return setIsValid(false);
    const isAlreadyExist = contacts.find(el => el.name === name);
    if (isAlreadyExist) {
      resetForm();
      return alert(`${name} is already in contacts`);
    } else dispatch(addContactThunk({ name, number: phone, isValid }));
    resetForm();
  };

  return (
    <form
      className="card p-3 mx-auto mt-3"
      style={{ width: 500 }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={`${'form-control'} ${!isValid && 'is-invalid'}`}
          id="inputName"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputNumber" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          className={`${'form-control'} ${!isValid && 'is-invalid'}`}
          id="inputNumber"
          value={phone}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </form>
  );
};

export default FormCreateContact;
