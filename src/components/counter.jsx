import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 56,
        tags: ["tag1", "tag2", "tag3"],
    }
    render() { 
        return (
        <>
            <span className={ this.getBadgeChanges() }>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <div> {this.state.tags.length === 0 && "Please create a new tag!"} </div>
            {this.renderTags()}
        </>)
    }
    formatCount () {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    getBadgeChanges(){
        let classes = "badge m-3 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    renderTags() {
        return (
            <ul>
                {this.state.tags.map(tag=> <li key={tag}> {tag} </li>)}
            </ul>
        )
    }
}
 
export default Counter;
