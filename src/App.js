import React, { useState } from "react";
import Header from "./components/Header.js";
import ContactInfo from "./components/ContactInfo.js";
import Employer from "./components/Employer.js";
import Education from "./components/Education.js";
import Skills from "./components/Skills.js";
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
    employerID2: {
      company: "Legends Bar and Grill",
      position: "Bartender",
      datesWorked: "2017-2020",
      duties: ["Served drinks at bar", "Managed employees", "ensured security of patrons"],
    }
  });

  const [education, setEducation] = useState({
    institution1: {
      graduation: "Bachelor's Degree",
      almaMater: "University of Illinois at Urbana-Champaign",
      attended: "08/2015 - 05/2020"
    },
  });

  const [formToggle, setFormToggle] = useState({
    employer: false,
    education: false,
    skill: false
  });

  const [edit, setEdit] = useState({
    createEmployer: {
      company: "",
      position: "",
      datesWorked: "",
      duties: null
    },

    createEducator: {
      graduation: "",
      almaMater: "",
      attended: ""
    },

    createSkill: {
      skill: ""
    }
  });

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
   console.log(edit.createEducator);
  }

  function handleSkillChange (e) {
    const skillVal = e.target.value;
    setEdit({
      ...edit,
      createSkill: {skill: skillVal}
    })
  }

  function submitSkill (e) {
    e.preventDefault();
    setSkills(skills => [...skills, edit.createSkill.skill]);
    setEdit({...edit, createSkill: {skill: ""}});
    setFormToggle({...formToggle, skill: false});
  }

  function submitEntry (e) {
    // Push createEmployer edit to workExperience
    e.preventDefault();
    if (e.target.id == "createEmployer") {
      setWorkExperience({
        ...workExperience,
        [uniqid()]: {
          ...edit.createEmployer,
          duties: edit.createEmployer.duties.split(', ')
        } 
      })
      setEdit({
        ...edit,
        createEmployer: {
          company: "",
          position: "",
          datesWorked: "",
          duties: null
        }
      })
    } else {
      setEducation({
        ...education,
        [uniqid()]: {
          ...edit.createEducator
        }
      })
    }
    setFormToggle({employer: false, education: false})
  }

  return (
    <div id="cv">
      <section id="top">
        <Header data={headerData} setData={setHeaderData} submit={submitChange}/>
        <ContactInfo data={contactInfoData} setData={setContactInfoData} submit={submitChange}/>
      </section>
      <section id="middle">
        <Employer data={workExperience} id="workExperience"/> 
        {formToggle.employer == true ?
            <Form section="createEmployer" toEdit={edit.createEmployer} change={handleFormChange} submit={submitEntry}/>
            :
            <button onClick={() => setFormToggle({...formToggle, employer: true})}>New +</button>  
            }
        <Education info={education} />
        {formToggle.education == true ?
            <Form section="createEducator" toEdit={edit.createEducator} change={handleFormChange} submit={submitEntry}/>
            :
            <button onClick={() => setFormToggle({...formToggle, education: true})}>
              New Education
            </button>
          }
      </section>
      <section id="bottom">
        <Skills skills={skills} />
        {formToggle.skill == true ?
        <Form section="createSkill" toEdit={edit.createSkill} change={handleSkillChange} submit={submitSkill} />
        :
          <button onClick={() => setFormToggle({...formToggle, skill: true})}>+ New Skill</button>
        }
      </section>
    </div>
  );
}

export default App;
