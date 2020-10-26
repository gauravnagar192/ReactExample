import React from 'react';

function Person(props) {
  return (
    <div className="person">
      <div>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default Person;