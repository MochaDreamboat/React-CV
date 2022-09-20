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
      skills: [],
      pic: undefined
     },

     contactInfo: {
      email: 'johnsmith@gmail.com',
      phone: '111-111-1111',
      location: 'Chicago, IL',
      website: 'mywebsite.com',
     },

     employers: {
      'someid1': {
          'company': 'Legends',
          'position': 'Bartender',
          'Dates Worked': '09/2017 - 07/2020',
          'duties': ['lorem ipsum','lorem ipsum','lorem ipsum']
      },
  
      'someid2': {
          'position': 'UIF',
          'Dates Worked': '10/2016 - 10/2019',
          'duties': ['lorem ipsum','lorem ipsum','lorem ipsum']
      },
  
      'someid3': {
          'position': 'Chamberlain University',
          'datesWorked': '03/2021 - 03/2022',
          'duties': ['lorem ipsum','lorem ipsum','lorem ipsum']
      }
    },

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
      },
     },

     

     formVisible: {
      header: false,
      contactInfo: false,
      experience: false
     },

     pastJobs: []
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  toggleForm = (e) => {
    const changeToggle = (this.state.formVisible[e.target.id] ? false : true)
    this.setState({
      formVisible: {
        [e.target.id]: changeToggle
      }
    })
  }

  handleChange = (e) => {
    let changeCategory = e.target.className;
    let changedValue = e.target.id;
    this.setState({
      changes: {
        [changeCategory]: {
          ...this.state.changes[changeCategory],
          [changedValue]: e.target.value
        }
      }
    })
    console.log(this.state.changes);
  }

  submitChanges = (e) => {
    e.preventDefault();
    const changeCategory = e.target.id;
    const edits = this.state.changes[changeCategory];
    this.setState({
      [changeCategory]: {
        ...this.state[changeCategory],
        ...edits
      },
      formVisible: false
    })
    for (let field in edits) {
      this.setState({
        edits: {
          ...edits,
          [field]: ''
        }
      })
    }
    }


  render() {
    const {name, title, summary } = this.state.header;
    const { email, phone, location, website } = this.state.contactInfo;
    const employers = this.state.employers;
    return (
    <div>
      <Header name={name} title={title} summary={summary} showForm={this.toggleForm} />
      {this.state.formVisible.header && <Form willChange={"header"} fields={['name', 'title', 'summary']} edit={this.handleChange} submit={this.submitChanges}/>}
      <ContactInfo email={email} phone={phone} location={location} website={website} showForm={this.toggleForm} />
      {this.state.formVisible.contactInfo && <Form willChange={"contactInfo"} fields={['email', 'phone', 'location', 'website']} edit={this.handleChange} submit={this.submitChanges}/>}
      <Experience employers = { employers } />
    </div>
    )
  }
}

export default App;
