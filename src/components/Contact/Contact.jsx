// import { FaUser } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact }) {
  return (
    <>
      <div>
        <div>
          <p>
            {/* <FaUser /> */}
            {contact.name}
          </p>
          <p>
            {/* <FaPhoneAlt /> */}
            {contact.number}
          </p>
        </div>
        <button>Delate</button>
      </div>
    </>
  );
}
