import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.listElem} key={contact.id}>
            <Contact user={contact} onContactDelate={onContactDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
