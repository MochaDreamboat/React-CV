// Grabs from personalInfo obj:
// personalInfo.name
// personalInfo.title
//personalInfo.pic

import React, {Component} from "react";
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formVisible: false,
            changes: {
                changedName: '',
                changedTitle: '',
                changedSummary: ''
            }
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        const visible = (this.state.formVisible ? false : true);
        this.setState({formVisible: visible})
    }


    render() {
        const { name, title, summary, showForm } = this.props;

        return (
            <div>
                <section>
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                    <button onClick={showForm}>Edit</button>
                </section>
            </div>
 );
    }
}

export default Header;