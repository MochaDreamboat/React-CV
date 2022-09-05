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
      email: 'johnsmith@gmail.com',
      phone: '111-111-1111',
      location: 'Chicago, IL',
      website: 'mywebsite.com',
      summary: 'A fledgling developer looking to make moooves.',
      skills: [],
      pic: undefined
     },
     formVisible: false,
     pastJobs: []
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  changePersonalInfo = (changes) => {
    this.setState({personalInfo: {name: changes.changedName, title: changes.changedTitle, summary: changes.changedSummary}})
  }

  toggleForm () {
    const visible = (this.state.formVisible ? false : true);
    this.setState({formVisible: visible})
}

  render() {
    const {name, title, summary, email, phone, location, website } = this.state.personalInfo;
    return (
    <div>
      <Header name={name} title={title} summary={summary} showForm={this.toggleForm} />
      {this.state.formVisible && <Form />}
      <ContactInfo email={email} phone={phone} location={location} website={website} /> 
      <Experience pastJobs={pastJobs} />
    </div>
    )
  }
}

export default App;
