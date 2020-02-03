import React from "react";

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt={props.contact.name} title={props.contact.name} />
            <h4>{props.contact.name}</h4>
            <p>{ props.contact.email ? `Email: ${props.contact.email}` : null }</p>
            <p>{ !props.contact.phone ? null : `Phone number: ${props.contact.phone}` }</p>
        </div>
    )
}

export default ContactCard;