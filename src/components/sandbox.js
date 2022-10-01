// For messing around
import React, { useState, useEffect } from 'react';

function Header2 () {
    // Each field has a state object holding key/value pair for content and whether or not user is editing.

    const [name, setName] = useState({field: "insert name here", editingOn: false});
    const [title, setTitle] = useState({field: "insert title here", editingOn: false});
    const [summary, setSummary] = useState({field: "lorem ipsum something something...", editingOn: false}); 
    
    useEffect(() => {

    }, [ ])
    

    console.log(name.editingOn);
    // Should include a button that appears when hovered
    // That lets user edit field in place.
    // Conditonal rendering based on whether or not editing is T or F.
    return (
        <section>
            {name.editingOn ? 
            <div>
                <input>{name.field}</input>
                <button></button>
            </div>
            :
            <div>
                <h1 id="name">{name.field}</h1><button onClick={() => setName({field: name.field, editingOn: (editingOn ? false : true)})}>Edit</button>
            </div>
            }
            
            <h2 id="title">{title.field}</h2>
            <p id="summary">{summary.field}</p>
            {/* <button id="header" onClick={showForm}>Edit</button> */}
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