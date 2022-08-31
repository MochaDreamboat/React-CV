import React, { Component } from "react";
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

     pastJobs: []
    }
  }

  render() {
    const {name, title, summary, email, phone, location, website } = this.state.personalInfo;
    return (
    <div>
      <Header name={name} title={title} summary={summary}/>
      <ContactInfo email={email} phone={phone} location={location} website={website} /> 
      <Experience pastJobs={pastJobs} />
    </div>
    )
  }
}

export default App;
