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
        const { name, title, summary, changeInfo } = this.props;
    
        return (
            <div>
                <section>
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                    <button onClick={this.toggle}>Edit</button>
                    {this.state.formVisible && <Form />}
                </section>
            </div>
 );
    }
}

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

export default Header;
export { Form };