import React, { useEffect, useState } from "react";

// Grabs input from conditionally rendered input field and modifies
// state with onClick event.

function submitChange(obj, field, setFunction) {
  const change = document.getElementById(field).value;
  setFunction({
    ...obj,
    [field]: {
      fieldText: change,
      editingOn: false,
    },
  });
}
function Header() {
  // Each field has a state object holding key/value pair for content and whether or not user is editing.
  const [headerData, setHeaderData] = useState({
    name: { fieldText: "insert name here", editingOn: false },
    title: { fieldText: "insert title here", editingOn: false },
    summary: { fieldText: "insert summary here", editingOn: false },
  });

  // Should update top level state with header data.
  useEffect(() => {
    console.log("component updated");
  }, [headerData]);

  const { name, title, summary } = headerData;
  // Should include a button that appears when hovered
  // That lets user edit field in place.
  // Conditonal rendering based on whether or not editing is T or F.
  return (
    <section>
      {/* Render affected by click event changing field's setField property to true or false */}
      {name.editingOn ? (
        <div>
          <input placeholder={name.fieldText} id="name" />
          <button
            onClick={() => submitChange(headerData, "name", setHeaderData)}
          >
            Change
          </button>
          <button
            onClick={() =>
              setHeaderData({
                ...headerData,
                name: { fieldText: name.fieldText, editingOn: false },
              })
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
              setHeaderData({
                ...headerData,
                name: { fieldText: name.fieldText, editingOn: true },
              })
            }
          >
            Edit
          </button>
        </div>
      )}

      {title.editingOn ? (
        <div>
          <input placeholder={title.fieldText} id="title" />
          <button
            onClick={() => submitChange(headerData, "title", setHeaderData)}
          >
            Change
          </button>
          <button
            onClick={() =>
              setHeaderData({
                ...headerData,
                title: { fieldText: title.fieldText, editingOn: false },
              })
            }
          >
            X
          </button>
        </div>
      ) : (
        <div>
          <h1 id="title">{title.fieldText}</h1>
          <button
            onClick={() =>
              setHeaderData({
                ...headerData,
                title: { fieldText: title.fieldText, editingOn: true },
              })
            }
          >
            Edit
          </button>
        </div>
      )}

      {summary.editingOn ? (
        <div>
          <input placeholder={summary.fieldText} id="summary" />
          <button
            onClick={() => submitChange(headerData, "summary", setHeaderData)}
          >
            Change
          </button>
          <button
            onClick={() =>
              setHeaderData({
                ...headerData,
                summary: { fieldText: summary.fieldText, editingOn: false },
              })
            }
          >
            X
          </button>
        </div>
      ) : (
        <div>
          <h1 id="summary">{summary.fieldText}</h1>
          <button
            onClick={() =>
              setHeaderData({
                ...headerData,
                summary: { fieldText: summary.fieldText, editingOn: true },
              })
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
export { submitChange };
