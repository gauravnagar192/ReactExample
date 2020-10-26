import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((element, i) => {
        return (
          <Person
            key={element.id}
            name={element.name}
            age={element.age}
            click={() => props.clicked(i)}
          >
            <input
              type="text"
              onChange={(e) => props.changed(e, element.id)}
              value={element.name}
            />
          </Person>
        );
      });

      export default Persons