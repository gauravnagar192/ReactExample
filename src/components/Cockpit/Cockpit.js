import React , { useEffect } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    
    // useEffect is componentDidMount & componentDidUpdate combine
    // pass empty array for run it once when cockpit component mounted
    // pass component in array if you wanna run it whenever that component rendered
    useEffect(() => {
        console.log("UseEffect Triggered");
        setTimeout(() => {
            console.log('Persons')
        }, 1000);
        return () => {
            console.log('cockpit clean up work');
        }
    }, [])

    useEffect(() => {
        console.log("2nd UseEffect Triggered");
        return () => {
            console.log('cockpit clean up work in 2nd UseEffect');
        }
    })
    let assignedClasses = [];
    let btnClasses = '';    

    if(props.personsLength <= 2 ) {
        assignedClasses.push(classes.green);
    }
    if(props.personsLength <= 1) {
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
            {/* this is one way for using context api */}
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    )
}

export default React.memo(Cockpit)