import React, { Component } from 'react';
import Counter from './counter';
import Total from './total';

class CounterHolder extends Component {
    
    state = {
        counters: [
            {id: 1, value: 0, elementName: "Lechuga", elementUnitaryPrice:"9.99"},
            {id: 2, value: 2, elementName: "Sandia", elementUnitaryPrice:"4.99"},
            {id: 3, value: 0, elementName: "Alita de Pollo", elementUnitaryPrice:"9.99"},
            {id: 4, value: 9, elementName: "Muslo de Pollo", elementUnitaryPrice:"9.54"},
        ]
    };

    handleDelete = (key)=>{
        const counters = this.state.counters.filter(c => c.id !== key);
        this.setState({counters});
    }
    
    render() { 
        return (<div>
                    <table>
                        <tbody>
                            {this.state.counters.map(counter => <Counter key={counter.id} id={counter.id} onDelete={this.handleDelete} value={counter.value} elementName={counter.elementName} elementUnitaryPrice={counter.elementUnitaryPrice}/>)}
                        </tbody>
                    </table>
                    <Total total={this.calcularPrecio()}/>
                </div>);
    }

    calcularPrecio = () =>{
        var counters = this.state.counters;
        var precioTotal = 0;
        for(var i = 0; i<counters.length; i++){
            var counter = counters[i];
            precioTotal+= counter.value * counter.elementUnitaryPrice;
        }
        return +(Math.round(precioTotal + "e+2")  + "e-2");
    }
}
 
export default CounterHolder;