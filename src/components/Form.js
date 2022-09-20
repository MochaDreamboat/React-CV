import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        const {willChange, fields, edit, submit } = this.props;
        return (
            <form id="edit-header">
                {fields.map( (field) => {
                    return (
                    <div>
                        <label htmlFor={field}>Change {field}</label>
                        <input onChange={edit} className={willChange} id={field} />
                    </div>        
                )})}:
                <button value ={willChange} id={willChange} onClick={submit}>Make Changes</button>
            </form>
        )
    }
}


export default Form;