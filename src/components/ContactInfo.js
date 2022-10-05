import React from "react";

function ContactInfo (props) {
  const { data, setData, submit } = props;

  return (
    <section id="contact-info">
      <ul style={{listStyleType: 'none'}}>
        {data.email.editingOn ? (
          <li>
            <input placeholder={data.email.fieldText} id="email"/>
            <button
              onClick={() => submit(data, "email", setData)}>
                Change
              </button>
            <button
              onClick={() =>
                setData({
                ...data,
                email: {fieldText: data.email.fieldText, editingOn: false},
              })
            }
          >
            X
              </button>
          </li>
        ) : (
          <li>
            <p>{data.email.fieldText}</p>
            <button onClick={() =>
              setData({
                ...data,
                email: {fieldText: data.email.fieldText, editingOn: true}})}>
                Edit
              </button>
          </li>
        )}

        {data.phone.editingOn ? (
          <li>
            <input placeholder={data.phone.fieldText} id="phone"/>
            <button
              onClick={() => submit(data, "phone", setData)}>
                Change
              </button>
            <button
              onClick={() =>
                setData({
                ...data,
                phone: {fieldText: data.phone.fieldText, editingOn: false},
              })
            }
          >
            X
              </button>
          </li>
        ) : (
          <li>
            <p>{data.phone.fieldText}</p>
            <button onClick={() =>
              setData({
                ...data,
                phone: {fieldText: data.phone.fieldText, editingOn: true}
                })}>
                Edit
              </button>
          </li>
        )}

        {data.location.editingOn ? (
          <li>
            <input placeholder={data.location.fieldText} id="location"/>
            <button
              onClick={() => submit(data, "location", setData)}>
                Change
              </button>
            <button
              onClick={() =>
                setData({
                ...data,
                location: {fieldText: data.location.fieldText, editingOn: false},
              })
            }
          >
            X
              </button>
          </li>
        ) : (
          <li>
            <p>{data.location.fieldText}</p>
            <button onClick={() =>
              setData({
                ...data,
                location: {fieldText: data.location.fieldText, editingOn: true}})}>
                Edit
              </button>
          </li>
        )}

        {data.website.editingOn ? (
          <li>
            <input placeholder={data.website.fieldText} id="website"/>
            <button
              onClick={() => submit(data, "website", setData)}>
                Change
              </button>
            <button
              onClick={() =>
                setData({
                ...data,
                website: {fieldText: data.website.fieldText, editingOn: false},
              })
            }
          >
            X
              </button>
          </li>
        ) : (
          <li>
            <p>{data.website.fieldText}</p>
            <button onClick={() =>
              setData({
                ...data,
                website: {fieldText: data.website.fieldText, editingOn: true}})}>
                Edit
              </button>
          </li>
        )}    
      </ul>
    </section>
  );
}
export default ContactInfo;