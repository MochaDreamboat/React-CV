import React from "react";

function Header (props) {
  // Each field has a state object holding key/value pair for content and whether or not user is editing.
  const { data, setData, submit} = props;
  // Should update top level state with header data.

  // Should include a button that appears when hovered
  // That lets user edit field in place.
  // Conditonal rendering based on whether or not editing is T or F.
  return (
    <section id="header">
      {/* Render affected by click event changing field's setField property to true or false */}
      {data.name.editingOn ? (
        <div>
          <input placeholder={data.name.fieldText} id="name" />
          <button
            onClick={() => submit(data, "name", setData)}
          >
            Change
          </button>
          <button
            onClick={() =>
              setData({
                ...data,
                name: { fieldText: data.name.fieldText, editingOn: false },
              })
            }
          >
            X
          </button>
        </div>
      ) : (
        <div>
          <h1 id="name">{data.name.fieldText}</h1>
          <button
            onClick={() =>
              setData({
                ...data,
                name: { fieldText: data.name.fieldText, editingOn: true },
              })
            }
          >
            Edit
          </button>
        </div>
      )}

      {/* Render affected by click event changing field's setField property to true or false */}
      {data.title.editingOn ? (
        <div>
          <input placeholder={data.title.fieldText} id="title" />
          <button
            onClick={() => submit(data, "title", setData)}
          >
            Change
          </button>
          <button
            onClick={() =>
              setData({
                ...data,
                title: { fieldText: data.title.fieldText, editingOn: false },
              })
            }
          >
            X
          </button>
        </div>
      ) : (
        <div>
          <h1 id="title">{data.title.fieldText}</h1>
          <button
            onClick={() =>
              setData({
                ...data,
                title: { fieldText: data.title.fieldText, editingOn: true },
              })
            }
          >
            Edit
          </button>
        </div>
      )}

      {data.summary.editingOn ? (
        <div>
          <input placeholder={data.summary.fieldText} id="summary" />
          <button
            onClick={() => submit(data, "summary", setData)}
          >
            Change
          </button>
          <button
            onClick={() =>
              setData({
                ...data,
                summary: { fieldText: data.summary.fieldText, editingOn: false },
              })
            }
          >
            X
          </button>
        </div>
      ) : (
        <div>
          <h1 id="title">{data.summary.fieldText}</h1>
          <button
            onClick={() =>
              setData({
                ...data,
                summary: { fieldText: data.summary.fieldText, editingOn: true },
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

