import ContactList from 'components/ContactList/ContactList';
import FormCreateContact from 'components/Forms/CreateContact/CreateContact';
import FormFilterContact from 'components/Forms/Filter/Filter';

import './store/store';

const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <FormCreateContact />
      <h2>Contacts</h2>
      <FormFilterContact />
      <ContactList />
    </div>
  );
};

export default App;
