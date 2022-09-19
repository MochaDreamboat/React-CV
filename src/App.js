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
    this.handleChange = this.handleChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  toggleForm () {
    const visible = (this.state.formVisible ? false : true);
    this.setState({formVisible: visible})
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
    console.log(this.state.changes.header)
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
    const {name, title, summary, email, phone, location, website } = this.state.header;
    const employers = this.state.employers;
    return (
    <div>
      <Header name={name} title={title} summary={summary} showForm={this.toggleForm} />
      {this.state.formVisible && <Form willChange={"header"} section={"header"} fields={['name', 'title', 'summary']} edit={this.handleChange} submit={this.submitChanges}/>}
      <ContactInfo email={email} phone={phone} location={location} website={website} /> 
      <Experience pastJobs={employers } />
    </div>
    )
  }
}

export default App;
