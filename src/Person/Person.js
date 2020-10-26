import React from 'react';
import classes from '../index.css';


function Person(props) {
  return (
    <div className={classes.Person}>
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