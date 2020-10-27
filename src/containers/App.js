import React, { useState } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "../index.css";
import withClass from "../HOC/WithClass";
import AuthContext from "../context/auth-context";

function App(props) {
  let persons;
  const [personState, setPersonstate] = useState({
    persons: [
      { id: "tfed", name: "Max", age: 28 },
      { id: "tfds", name: "Manu", age: 29 },
      { id: "tfwr", name: "Stephanie", age: 26 },
    ],
  });

  const [toggle, setToggle] = useState(false);
  const [cockpit, setCockpit] = useState(true);
  let [counter, setCounter] = useState(0);
  let [authenticatedState,setAuthenticatedState] = useState(false);

  if (toggle) {
    persons = (
      <Persons
        persons={personState.persons}
        clicked={deleteData}
        changed={changeData}
      />
    );
  }

  function showPerson() {
    setToggle(!toggle);
  }

  function changeData(e, i) {
    // Changing state in immutable way
    let personIndex = personState.persons.findIndex((p) => {
      return p.id === i;
    });
    const person = {
      ...personState.persons[personIndex],
    };
    person.name = e.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;
    setPersonstate({
      persons: persons,
    });

    let newCounter = ++counter;
    setCounter(newCounter);
  }

  function deleteData(index) {
    // Deleting data in state in immutable way
    let persons = [...personState.persons];
    persons.splice(index, 1);
    setPersonstate({ persons: persons });
  }

  function loginHandler() {
    setAuthenticatedState(!authenticatedState);
  }

  return (
    <div>
      <button onClick={() => setCockpit(!cockpit)}>Show Cockpit</button>
      <AuthContext.Provider value={{
        authenticated: authenticatedState,
        login: loginHandler
      }}>
      {cockpit ? (
        <Cockpit
          title={props.appTitle}
          toggle={toggle}
          personsLength={personState.persons.length}
          show={showPerson}
          login = {loginHandler}
        />
      ) : null}
      {persons}
      </AuthContext.Provider>
    </div>
  );
}

export default withClass(App, classes.App);
