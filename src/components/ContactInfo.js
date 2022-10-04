import React, { useState } from "react";
import { submitChange } from "./Header";

function ContactInfo () {
  const [email, setEmail] = useState({
    fieldText: "email@email.com",
    editingOn: false,
  });
  const [phone, setPhone] = useState({
    fieldText: "555-555-5555",
    editingOn: false,
  });
  const [location, setLocation] = useState({
    fieldText: "Some City, MD",
    editingOn: false,
  });
  const [website, setWebsite] = useState({
    fieldText: "somewebsite@somewebsite.com",
    editingOn: false,
  });

  return (
    <div>
      <ul style={{listStyleType: 'none'}}>
        {email.editingOn ? (
          <li>
            <input placeholder={email.fieldText} id="email"/>
            <button
              onClick={() => submitChange("email", setEmail)}>
                Change
              </button>
            <button
              onClick={() => setEmail({fieldText: email.fieldText, editingOn: false})}>
                X
              </button>
          </li>
        ) : (
          <li>
            <p>{email.fieldText}</p>
            <button onClick={() =>
              setEmail({ fieldText: email.fieldText, editingOn: true})}>
                Edit
              </button>
          </li>
        )}
        {phone.editingOn ? (
          <li>
            <input placeholder={phone.fieldText} id="phone"/>
            <button
              onClick={() => submitChange("phone", setPhone)}>
                Change
              </button>
            <button
              onClick={() => setPhone({fieldText: phone.fieldText, editingOn: false})}>
                X
              </button>
          </li>
        ) : (
          <li>
            <p>{phone.fieldText}</p>
            <button onClick={() =>
              setPhone({ fieldText: phone.fieldText, editingOn: true})}>
                Edit
              </button>
          </li>
        )}
        {location.editingOn ? (
          <li>
            <input placeholder={location.fieldText} id="location"/>
            <button
              onClick={() => submitChange("location", setLocation)}>
                Change
              </button>
            <button
              onClick={() => setLocation({fieldText: location.fieldText, editingOn: false})}>
                X
              </button>
          </li>
        ) : (
          <li>
            <p>{location.fieldText}</p>
            <button onClick={() =>
              setLocation({ fieldText: location.fieldText, editingOn: true})}>
                Edit
              </button>
          </li>
        )}
        {website.editingOn ? (
          <li>
            <input placeholder={location.fieldText} id="website"/>
            <button
              onClick={() => submitChange("phone", setWebsite)}>
                Change
              </button>
            <button
              onClick={() => setWebsite({fieldText: website.fieldText, editingOn: false})}>
                X
              </button>
          </li>
        ) : (
          <li>
            <p>{website.fieldText}</p>
            <button onClick={() =>
              setWebsite({ fieldText: website.fieldText, editingOn: true})}>
                Edit
              </button>
          </li>
        )}
      </ul>
      <button id="contactInfo">Edit</button>
    </div>
  );
}
export default ContactInfo;