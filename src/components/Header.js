// Grabs from personalInfo obj:
// personalInfo.name
// personalInfo.title
//personalInfo.pic

import React, {Component} from "react";
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, title, summary } = this.props;
    
        return (
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <p>{summary}</p>
            </div>
 );
    }
}

export default Header;