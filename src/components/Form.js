import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        const {willChange, fields, edit, submit } = this.props;
        return (
            <form>
                {fields.map( (field) => {
                    return (
                    <div key={field}>
                        <label htmlFor={field}>Change {field}</label>
                        <input onChange={edit} className={willChange} id={field} />
                    </div>      
                )})}
                <button value ={willChange} id={willChange} onClick={submit}>Submit Changes</button>
            </form>
        )
    }
}


export default Form;