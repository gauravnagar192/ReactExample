import React from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {
    let assignedClasses = [];
    let btnClasses = '';    

    if(props.persons.length <= 2 ) {
        assignedClasses.push(classes.green);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    if(props.toggle) {
        btnClasses = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <h2>{props.title}</h2>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClasses} onClick={props.show}>Switch</button>
        </div>
    )
}

export default Cockpit