import React, { useState } from "react";
import Header from "./components/Header.js";
import ContactInfo from "./components/ContactInfo.js";
import Employer from "./components/Employer.js";
import Form from "./components/Form.js";
import uniqid from "uniqid";
import './styles/App.css';

function App() {

  // State Hooks related to CV functions.
  const [headerData, setHeaderData] = useState({
    name: { fieldText: "insert name here", editingOn: false },
    title: { fieldText: "insert title here", editingOn: false },
    summary: { fieldText: "insert summary here", editingOn: false },
  });

  const [contactInfoData, setContactInfoData] = useState({
    email: { fieldText: "insert email here", editingOn: false },
    phone: { fieldText: "555-555-5555", editingOn: false },
    location: { fieldText: "Some City, MD", editingOn: false },
    website: { fieldText: "mywebsite@mywebsite.com", editingOn: false },
  });

  // Still needs component file for this...
  const [skills, setSkills] = useState([]);

  const [workExperience, setWorkExperience] = useState({
    employerID: {
      company: "lorem ipsum bellum",
      position: "ur mom",
      datesWorked: "1969-2020", 
      duties: ['lived fast', 'died young'],
    },
    employerID2: {
      company: "Legends Bar and Grill",
      position: "Bartender",
      datesWorked: "2017-2020",
      duties: ["Served drinks at bar", "Managed employees", "ensured security of patrons"],
    }
  });

  const [education, setEducation] = useState({
    institution1: {
      graduation: "",
      almaMater: "",
      attended: ""
    },
    institution2: {
      graduation: "",
      almaMater: "",
      attended: ""
    },

    createInstitution: {
      graduation: "",
      almaMater: "",
      attended: ""
    },
  });

  const [formToggle, setFormToggle] = useState({
    employer: false,
    education: false
  });

  const [edit, setEdit] = useState({
    createEmployer: {
      company: "",
      position: "",
      datesWorked: "",
      duties: []
    },

    createEducator: {
      graduation: "",
      almaMater: "",
      attended: ""
    }
  })
  // Logic for Header/Contact Info
  function submitChange(obj, field, setFunction) {
    const change = document.getElementById(field).value;
    setFunction({
      ...obj,
      [field]: {
        fieldText: change,
        editingOn: false,
      },
    });
  }

  function handleFormChange (e, toEdit) {
   const fieldChange = e.target.value;
   const field = e.target.name;
   setEdit({
    [toEdit]: {
      ...edit[toEdit],
      [field]: fieldChange
    }
   })
   console.log(edit.createEmployer);
  }

  function submitEntry (e) {
    // Push createEmployer edit to workExperience
    e.preventDefault();
    if (e.target.id == "work-form") {
      setWorkExperience({
        ...workExperience,
        [uniqid()]: {
          ...edit.createEmployer,
          duties: edit.createEmployer.duties.split(', ')
        } 
      })
    }
  }

  return (
    <div>
      <section id="top">
        <Header data={headerData} setData={setHeaderData} submit={submitChange}/>
        <ContactInfo data={contactInfoData} setData={setContactInfoData} submit={submitChange}/>
      </section>
      <section id="middle">
        <Employer data={workExperience} id="test"/>
        {formToggle.employer == true ?
            <Form section="createEmployer" toEdit={edit.createEmployer} change={handleFormChange} submit={submitEntry}/>
            :
            <button onClick={() => setFormToggle({...formToggle, employer: true})}>New +</button>  
            }
      </section>
    </div>
  );
}

export default App;
