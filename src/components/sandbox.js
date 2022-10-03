// For messing around
import React, { useState, useEffect } from "react";

function Header2() {
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

  // Should include a button that appears when hovered
  // That lets user edit field in place.
  // Conditonal rendering based on whether or not editing is T or F.
  return (
    <section>
      {name.editingOn ? (
        <div>
          <input placeholder={name.fieldText} />
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
              setName({ fieldText: title.fieldText, editingOn: true })
            }
          >
            Edit
          </button>
        </div>
      )}

      {title.editingOn ? (
        <div>
          <input placeholder={title.fieldText} />
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
          <input placeholder={summary.fieldText} />
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

function editField (props) {

    return (
        <section>
            <input>{props.field}</input>
            <button onClick={props.submit}>Submit</button>
        </section>
    )
    
}

export default Header2;