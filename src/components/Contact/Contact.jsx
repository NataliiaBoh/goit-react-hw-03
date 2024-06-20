import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ user, onContactDelate }) {
  return (
    <>
      <div className={css.wrap}>
        <div className={css.contact}>
          <p>
            <FaUser className={css.icon} />
            {user.name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {user.number}
          </p>
        </div>
        <button className={css.button} onClick={() => onContactDelate(user.id)}>
          Delate
        </button>
      </div>
    </>
  );
}
