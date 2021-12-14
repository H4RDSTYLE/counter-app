import React, { Component } from 'react';
import CounterHolder from './counterHolder';

class Controller extends Component {
    state={
        counters: [
            {id: 1, value: 0, elementName: "Lechuga", elementUnitaryPrice:"9.99"},
            {id: 2, value: 2, elementName: "Sandia", elementUnitaryPrice:"4.99"},
            {id: 3, value: 0, elementName: "Alita de Pollo", elementUnitaryPrice:"9.99"},
            {id: 4, value: 9, elementName: "Muslo de Pollo", elementUnitaryPrice:"9.54"},
        ]
    }
    render() { 
        return <div><CounterHolder data={this.state.counters}/></div>;
    }
}
 
export default Controller;