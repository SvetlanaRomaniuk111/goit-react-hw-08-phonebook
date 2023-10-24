import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/contact/actions';
import { selectorCreateContacts } from 'store/contact/selectors';
import css from './CreateContact.module.css';

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
    } else dispatch(addContactThunk({ name, phone, isValid }));
    resetForm();
  };

  return (
    <form className={css.form_contact} onSubmit={handleSubmit}>
      <div className={css.input_contact}>
        <label htmlFor="inputName" className={css.form_label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={`${css.form_control} ${!isValid && 'is-invalid'}`}
          id="inputName"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.input_contact}>
        <label htmlFor="inputNumber" className={css.form_label}>
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          className={`${css.form_control} ${!isValid && 'is-invalid'}`}
          id="inputNumber"
          value={phone}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default FormCreateContact;
