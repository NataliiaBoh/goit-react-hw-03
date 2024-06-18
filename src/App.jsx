import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const initialContactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(initialContactsList);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts-list", JSON.stringify(contacts));
  }, [contacts]);

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      {/* <ContactForm/> */}

      <SearchBox value={searchName} onSearch={setSearchName} />

      <ContactList contacts={searchedContacts} />
    </div>
  );
}

export default App;
