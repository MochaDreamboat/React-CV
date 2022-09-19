import React, { Component } from "react";

class ContactInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { email, phone, location, website, showForm } = this.props;

        return (
            <div>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                    <li>{location}</li>
                    <li>{website}</li>
                </ul>
                <button id="contactInfo" onClick={showForm}>Edit</button> 
            </div>
        )
    }
}

export default ContactInfo;