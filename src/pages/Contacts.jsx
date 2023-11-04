import ContactList from "components/ContactList/ContactList"
import FormCreateContact from "components/Forms/CreateContact/CreateContact"
import FormFilterContact from "components/Forms/Filter/Filter"

const Contacts = () => {
    return( 
        <div className="container">
                    <h1>Phonebook</h1>
                    <FormCreateContact />
                    <h2>Contacts</h2>
                    <FormFilterContact />
                    <ContactList />
                </div>
    )
}

export default Contacts