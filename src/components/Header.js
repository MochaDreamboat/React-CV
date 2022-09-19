// Grabs from personalInfo obj:
// personalInfo.name
// personalInfo.title
//personalInfo.pic

import React, { Component } from "react";
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, title, summary, showForm } = this.props;

        return (
            <div>
                <section>
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                    <button id="header" onClick={showForm}>Edit</button>
                </section>
            </div>
 );
    }
}

export default Header;