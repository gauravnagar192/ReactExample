import React, { useState } from 'react';
import Person from './Person/Person';
import './index.css';
import classes from './index.css';

function App(props) {
  let person;
  const [personState, setPersonstate] = useState({
    persons: [
      { id: 'tfed', name: 'Max', age: 28 },
      { id: 'tfds', name: 'Manu', age: 29 },
      { id: 'tfwr', name: 'Stephanie', age: 26 },
    ],
  });

  const [toggle, setToggle] = useState(false);

  let assignedClasses = [];
  let btnClasses = '';
  

  if(personState.persons.length <= 2 ) {
    assignedClasses.push(classes.green);
  }
  if(personState.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (toggle) {
    person = personState.persons.map((element, i) => {
      return (
        <Person
          key={element.id}
          name={element.name}
          age={element.age}
          click={() => deleteData(i)}
        >
          <input
            type="text"
            onChange={(e) => changeData(e, element.id)}
            value={element.name}
          />
        </Person>
      );
    });
    btnClasses = classes.Red;
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
    <div className={classes.App}>
      <h2>Hi, i am React App</h2>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClasses} onClick={showPerson}>Switch</button>
      {person}
    </div>
  );
}

export default App;