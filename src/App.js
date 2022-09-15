import React, { Component } from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import Experience from "./components/Experience.js";
import ContactInfo from "./components/ContactInfo.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
     header: {
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

      employers: [
           {
          name: 'Legends',  
          years: '2017 - 2020',
          positions: [{role: 'Bartender', years: '2017-2020', duties: ['Served drinks to loyal customers', 'Ensured safety of employees']}]
        },
        {
          name: 'University of Illinois Foundation',
          years: '2016 - 2019',
          positions: [{role: 'Student Development Representative', years: '2017-2020', duties: ['Corresponded with alumni and associates for donations.', 'Conducted alumni outreach for school-related events']}]
        },
      ],

     changes: {
      header: {
        name: '',
        title: '',
        summary: ''
      },
      contactInfo: {
        email: '',
        phone: '',
        location: '',
        website: ''
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

  // Handles change for personal info.
  // Generalize function by using class to target specific key in changes???
  handleChange = (e) => {
    // let changesCategory = e.target.class;
    let changeCategory = e.target.className;
    let changedValue = e.target.id;
    this.setState({
      changes: {
        [changeCategory]: {
          ...this.state.changes.header,
          [changedValue]: e.target.value
        }
      }
    })
  }

  submitChanges = (e) => {
    const edits = this.state.changes.header;
    e.preventDefault();
    this.setState({
      header: {
        ...this.state.header,
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
    const {name, title, summary, email, phone, location, website } = this.state.header;
    const employers = this.state.employers;
    return (
    <div>
      <Header name={name} title={title} summary={summary} showForm={this.toggleForm} />
      {this.state.formVisible && <Form edit={this.handleChange} default={this.state.header} submit={this.submitChanges}/>}
      <ContactInfo email={email} phone={phone} location={location} website={website} /> 
      <Experience pastJobs={employers } />
    </div>
    )
  }
}

export default App;
