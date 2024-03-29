import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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
      {contact.name + ' : ' + contact.number}
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        type="button"
        aria-label="Close"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </Button>
    </li>
  );
};

export default Contact;
