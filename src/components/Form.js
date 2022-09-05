import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        const { name, title, summary } = this.props.default;
        return (
            <form id="edit-header">
                <label for="name">Change Name</label>
                <input onChange={this.props.edit} id="name" placeholder={name} />
                <label for="title">Change Title</label>
                <input onChange={this.props.edit} id="title" placeholder={title}/>
                <label for="summary">Change Summary</label>
                <input onChange={this.props.edit} id="summary" placeholder={summary} />
                <button onClick={this.props.submit}>Make Changes</button>    
            </form>
        )
    }
}


export default Form;