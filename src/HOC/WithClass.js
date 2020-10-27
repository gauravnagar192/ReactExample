import React from 'react';

// ONE WAY OF HIGHER ORDER COMPONENTS
// const WithClass = (props) =>  <div className={props.classes}>{props.children}</div>

// OTHER WAY OF HIGHER ORDER COMPONENTS
const withClass = (Wrappedcomponent, className) => {
    return props => (
    <div className={className}>
        <Wrappedcomponent {...props} />
    </div>
    );
}


export default withClass;