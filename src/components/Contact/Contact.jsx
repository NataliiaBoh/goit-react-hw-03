import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onContactDelate }) {
  return (
    <>
      <div className={css.wrap}>
        <div className={css.contact}>
          <p>
            <FaUser className={css.icon} />
            {contact.name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {contact.number}
          </p>
        </div>
        <button
          className={css.button}
          onClick={() => {
            onContactDelate(contact.id);
          }}
        >
          Delate
        </button>
      </div>
    </>
  );
}
