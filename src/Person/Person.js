import React from 'react';
import Radium from 'radium';

function Person(props) {
  const style = {
    '@media screen and (max-width: 425px)':{
      width: '40vw'
    }
  }
  return (
    <div className="person" style={style}>
      <div>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default Radium(Person);