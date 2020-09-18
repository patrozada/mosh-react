import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value:37456},
            {id: 2, value:0},
            {id: 3, value:0},
            {id: 4, value:0}
        ]
     }
    handleIncrement = (counter) => {
        // clone the counters array
        const counters = [...this.state.counters];
        // Find the index of the counter that is being clicked
        const index = counters.indexOf(counter);
        // Update the array with the new 
        counters[index] = {...counter};
        // Add 1 to the counter that is being updated
        counters[index].value++;
        // Set this changes in the state
        this.setState({ counters: counters});
    }
    handleDelete = (counterId) => {
        //This filter method overwirites the counters array in the state excluding those that had been deleted when triggering the delete event.
        const counters = this.state.counters.filter(counter => 
            counter.id !== counterId);
            this.setState({ counters: counters});
    }
    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement} />)}
            </div>
        );
    }
}
 
export default Counters;