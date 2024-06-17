import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onContactDelate }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onContactDelate={onContactDelate} />
          </li>
        ))}
      </ul>
    </>
  );
}
