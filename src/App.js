import React, { Component } from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import { ContactInfo2 } from "./components/sandbox.js";
import ContactInfo from "./components/ContactInfo.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";

import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      header: {
        id: "a",
        name: "John Smith",
        title: "Web Developer",
        summary: "A fledgling developer looking to make moooves.",
        skills: [],
        pic: undefined,
      },

      contactInfo: {
        id: "b",
        email: "johnsmith@gmail.com",
        phone: "111-111-1111",
        location: "Chicago, IL",
        website: "mywebsite.com",
      },

      employers: {
        someid1: {
          company: "Legends",
          position: "Bartender",
          "Dates Worked": "09/2017 - 07/2020",
          duties: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        },
      },

      education: {
        institution1: {
          graduation: "Bachelor's Degree in Behavioral Neuroscience",
          almaMater: "University of Illinois at Urbana-Champaign",
          attended: "2019-2021",
        },
      },

      // For submitting new employer. Object pushed to employers state and cleared upon submission.
      employer: {
        company: "",
        position: "",
        "Dates Worked": "",
        duties: [],
      },

      educator: {
        graduation: "",
        almaMater: "",
        attended: "",
      },

      changes: {
        header: {
          name: "",
          title: "",
          summary: "",
        },
        contactInfo: {
          email: "",
          phone: "",
          location: "",
          website: "",
        },
      },

      formVisible: {
        header: false,
        contactInfo: false,
        experience: false,
        education: false,
      },

      pastJobs: [],
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  toggleForm = (e) => {
    const changeToggle = this.state.formVisible[e.target.id] ? false : true;
    this.setState({
      formVisible: {
        [e.target.id]: changeToggle,
      },
    });
  };

  handleCreate = (e) => {
    const addTo = e.target.className;
    const addedValue = e.target.id;
    this.setState({
      [addTo]: {
        ...this.state[addTo],
        [addedValue]: e.target.value,
      },
    });
  };

  // For submitting new Employer
  newEmployerSubmission = (e) => {
    // Push new employer staged in state to Employers.
    e.preventDefault();
    this.setState({
      employers: {
        ...this.state.employers,
        [uniqid()]: {
          ...this.state.employer,
          duties: this.state.employer.duties.split(", "),
        },
      },
    });
  };

  newEducatorSubmission = (e) => {
    e.preventDefault();
    this.setState({
      education: {
        ...this.state.education,
        [uniqid()]: {
          ...this.state.educator
        }
      }
    })
  };

  handleChange = (e) => {
    let changeCategory = e.target.className;
    let changedValue = e.target.id;
    this.setState({
      changes: {
        [changeCategory]: {
          ...this.state.changes[changeCategory],
          [changedValue]: e.target.value,
        },
      },
    });
  };

  submitChanges = (e) => {
    e.preventDefault();
    const changeCategory = e.target.id;
    const edits = this.state.changes[changeCategory];
    this.setState({
      [changeCategory]: {
        ...this.state[changeCategory],
        ...edits,
      },
      formVisible: false,
    });
    for (let field in edits) {
      this.setState({
        edits: {
          ...edits,
          [field]: "",
        },
      });
    }
  };

  render() {
    const employers = this.state.employers;
    return (
      <div>
        <Header />
        <ContactInfo2 />
        {/* <ContactInfo
          email={email}
          phone={phone}
          location={location}
          website={website}
          showForm={this.toggleForm}
        />
        {this.state.formVisible.contactInfo && (
          <Form
            willChange={"contactInfo"}
            fields={["email", "phone", "location", "website"]}
            edit={this.handleChange}
            submit={this.submitChanges}
          />
        )} */}
        <Experience employers={employers} showForm={this.toggleForm} />
        {this.state.formVisible.experience && (
          <Form
            willChange={"employer"}
            fields={["company", "position", "Dates Worked", "duties"]}
            edit={this.handleCreate}
            submit={this.newEmployerSubmission}
          />
        )}
        <Education
          education={this.state.education}
          showForm={this.toggleForm}
        />
        {this.state.formVisible.education && (
          <Form
            willChange={"educator"}
            fields={["graduation", "almaMater", "attended"]}
            edit={this.handleCreate}
            submit={this.newEducatorSubmission}
          />
        )}
      </div>
    );
  }
}

export default App;
