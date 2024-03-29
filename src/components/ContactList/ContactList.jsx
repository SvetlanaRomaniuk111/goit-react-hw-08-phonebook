import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContactList } from 'store/contact/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'store/contact/actions';

const ContactList = () => {
  const { items, filteredItems } = useSelector(selectorContactList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {items && (
        <ul>
          {(filteredItems ?? items).map(el => (
            <Contact contact={el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
