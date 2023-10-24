import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contact/actions';
import { deleteContactSync } from 'store/contact/slice';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
    dispatch(deleteContactSync(id));
  };
  return (
    <li className={css.list_group_item}>
      {contact.name + ' : ' + contact.phone}
      <button
        type="button"
        className={css.btn}
        aria-label="Close"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
