import React, { Component } from "react";
import Experience from "./components/Experience.js";

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
    
    }
  }

  render() {
    return <Experience pastJobs={pastJobs} />
  }
}

export default App;
