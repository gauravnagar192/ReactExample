import React, { useState } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import '../index.css';


function App(props) {
  let persons;
  const [personState, setPersonstate] = useState({
    persons: [
      { id: 'tfed', name: 'Max', age: 28 },
      { id: 'tfds', name: 'Manu', age: 29 },
      { id: 'tfwr', name: 'Stephanie', age: 26 },
    ],
  });

  const [toggle, setToggle] = useState(false);

  

  if (toggle) {
    persons = <Persons persons={personState.persons} clicked={deleteData} changed={changeData} />
    
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
  }

  function deleteData(index) {
    // Deleting data in state in immutable way
    let persons = [...personState.persons];
    persons.splice(index, 1);
    setPersonstate({ persons: persons });
  }

  return (
    <div>
      <Cockpit 
        title={props.appTitle}
        toggle={toggle}
        persons={personState.persons}
        show={showPerson}
      />
      {persons}
    </div>
  );
}

export default App;