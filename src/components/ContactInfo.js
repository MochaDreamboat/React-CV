import React, { Component } from "react";

class ContactInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { email, phone, location, website } = this.props;

        return (
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{location}</li>
                <li>{website}</li>
            </ul>
        )
    }
}

export default ContactInfo;