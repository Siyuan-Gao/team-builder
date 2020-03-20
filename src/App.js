import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from "./Components/MemberForm";


function App() {

 //State to shape members, and hold array of all members.
 const [teamMember, setTeamMember] = useState({
  name: "",
  email: "",
  role: ""
});
const [team, setTeam] = useState([]);
//handle changes on form
const handleChange = e => {
  setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
};
//handle submit of the form
const handleSubmit = e => {
  e.preventDefault();
  setTeamMember({ name: "", email: "", role: "" });
};
//renderMember function. based on simple checks of input
const renderMember = e => {
  if (teamMember.name === "") {
    e.preventDefault();
  } else if (teamMember.email === "") {
    e.preventDefault();
  } else if (teamMember.role === "") {
    e.preventDefault();
  } else if (!teamMember.email.includes("@")) {
    e.preventDefault();
  } else {
    setTeam([...team, teamMember]);
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
