import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;



/*const ContactsPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsPage;*/


/*const ContactsPage = () => {
  return <h1>Contacts Page</h1>;
};

export default ContactsPage;*/
