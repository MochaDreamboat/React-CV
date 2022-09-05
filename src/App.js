import React, { Component } from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import Experience from "./components/Experience.js";
import ContactInfo from "./components/ContactInfo.js";

const pastJobs = 
[
  {
    title: 'Legends',
    years: '2017-2021',
    positions: [{role: 'Bartender', years: '2017-2020', duties: ['Served drinks to loyal customers', 'Ensured safety of employees']}]
  },
]

class App extends Component {
  constructor() {
    super();

    this.state = {
     personalInfo: {
      name: 'John Smith',
      title: 'Web Developer',
      summary: 'A fledgling developer looking to make moooves.',
      email: 'johnsmith@gmail.com',
      phone: '111-111-1111',
      location: 'Chicago, IL',
      website: 'mywebsite.com',
      skills: [],
      pic: undefined
     },

     changes: {
      personalInfo: {
        name: '',
        title: '',
        summary: ''
      }
     },

     formVisible: false,
     pastJobs: []
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm () {
    const visible = (this.state.formVisible ? false : true);
    this.setState({formVisible: visible})
  }

  handleChange = (e) => {
    let changedValue = e.target.id;
    this.setState({
      changes: {
        personalInfo: {
          ...this.state.changes.personalInfo,
          [changedValue]: e.target.value
        }
      }
    })
  }

  submitChanges = (e) => {
    const edits = this.state.changes.personalInfo;
    e.preventDefault();
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        ...edits
      },
      
      changes: {
        name: '',
        title: '',
        summary: ''
      },
      formVisible: false
    })
  }


  render() {
    const {name, title, summary, email, phone, location, website } = this.state.personalInfo;
    return (
    <div>
      <Header name={name} title={title} summary={summary} showForm={this.toggleForm} />
      {this.state.formVisible && <Form edit={this.handleChange} default={this.state.personalInfo} submit={this.submitChanges}/>}
      <ContactInfo email={email} phone={phone} location={location} website={website} /> 
      <Experience pastJobs={pastJobs} />
    </div>
    )
  }
}

export default App;
