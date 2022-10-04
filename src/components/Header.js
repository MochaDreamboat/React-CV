import React, { useState } from "react";

function Header () {
    // Each field has a state object holding key/value pair for content and whether or not user is editing.
  
    const [name, setName] = useState({
      fieldText: "insert name here",
      editingOn: false,
    });
    const [title, setTitle] = useState({
      fieldText: "insert title here",
      editingOn: false,
    });
    const [summary, setSummary] = useState({
      fieldText: "lorem ipsum something something...",
      editingOn: false,
    });
    
    // Grabs input from conditionally rendered input field and modifies
    // state with onClick event.
    const submitChange = (field, setField) => {
      const change = document.getElementById(field).value;
      setField({fieldText: change, editingOn: false});
    }
  
    // Should include a button that appears when hovered
    // That lets user edit field in place.
    // Conditonal rendering based on whether or not editing is T or F.
    return (
      <section>
        {/* Render affected by click event changing field's setField property to true or false */}
        {name.editingOn ? (
          <div>
            <input placeholder={name.fieldText} id="name"/>
            <button
              onClick={() => submitChange("name", setName)}
            >
              Change
            </button>
            <button
              onClick={() =>
                setName({ fieldText: name.fieldText, editingOn: false })
              }
            >
              X
            </button>
          </div>
        ) : (
          <div>
            <h1 id="name">{name.fieldText}</h1>
            <button
              onClick={() =>
                setName({ fieldText: name.fieldText, editingOn: true })
              }
            >
              Edit
            </button>
          </div>
        )}
  
        {title.editingOn ? (
          <div>
            <input placeholder={title.fieldText} id="title"/>
            <button
              onClick={() => submitChange("title", setTitle)}
            >Change
            </button>
            <button
              onClick={() =>
                setTitle({ fieldText: title.fieldText, editingOn: false })
              }
            >
              X
            </button>
          </div>
        ) : (
          <div>
            <h2 id="title">{title.fieldText}</h2>
            <button
              onClick={() =>
                setTitle({ fieldText: title.fieldText, editingOn: true })
              }
            >
              Edit
            </button>
          </div>
        )}
  
        {summary.editingOn ? (
          <div>
            <input placeholder={summary.fieldText} id="summary"/>
            <button
              onClick={() => submitChange("summary", setSummary)}
            >Change
            </button>
            <button
              onClick={() =>
                setSummary({ fieldText: summary.fieldText, editingOn: false })
              }
            >
              X
            </button>
          </div>
        ) : (
          <div>
            <p id="summary">{summary.fieldText}</p>
            <button
              onClick={() =>
                setSummary({ fieldText: summary.fieldText, editingOn: true })
              }
            >
              Edit
            </button>
          </div>
        )}
      </section>
    );
  }

export default Header;