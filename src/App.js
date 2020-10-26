import React, { useState } from 'react';
import Person from './Person/Person';
import './index.css';
import styled from 'styled-components';

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

  const StyledButton = styled.button`
      padding: 1vw 2vw;
      outline: none;
      border: none;
      color: #FFFFFF;
      background-color:  ${props => props.alt ? '#6c5ce7' : '#d63031' };

      &:hover {
        background-color: #0984e3;
      }

      @media screen and (max-width: 425px) {
        background-color: #0984e3;
        padding: 1.1vh 2.2vh;
      }
  `

  const classes = [];

  if(personState.persons.length <= 2 ) {
    classes.push("green");
  }
  if(personState.persons.length <= 1) {
    classes.push("bold");
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
    <div className="App">
      <h2>Hi, i am React App</h2>
      <p className={classes.join(' ')}>This is really working</p>
      <StyledButton alt={toggle} onClick={showPerson}>Switch</StyledButton>
      {person}
    </div>
  );
}

export default App;