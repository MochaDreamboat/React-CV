import React from "react";

const Form = (props) => (
    <form id="edit-header">
        <label for="name">Change Name</label>
        <input id="name" onChange={null}/>
        <label for="title">Change Title</label>
        <input id="title" onChange={null}/>
        <label for="summary">Change Summary</label>
        <input id="summary" onChange={null}/>
        <button onClick={props.submitFunction}>Make Changes</button>    
    </form>
)


export default Form;