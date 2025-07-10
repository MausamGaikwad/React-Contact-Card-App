import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <h4>{props.no}</h4>
      <h2>{props.name}</h2>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}
export default ContactCard;
