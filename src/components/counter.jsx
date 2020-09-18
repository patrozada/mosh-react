import React, { Component } from 'react';

class Counter extends Component {
    // constructor(){
    //     super();
    //     this.handleButtonClick = this.handleButtonClick.bind(this);
    //     // remember that functions in JS are objects. 
    //     // In the previous line we are instantiating the function passing the context as argument, therefore this won't be undefined when we call the method.
    //     // If the handler is an arrow function I don't need to bind
    // }
    render() { 
        return (
        <>
            <span className={ this.getBadgeChanges() }>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-small m-2">Delete</button>
        </>)
    }
    formatCount () {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
    getBadgeChanges(){
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

}
 
export default Counter;
