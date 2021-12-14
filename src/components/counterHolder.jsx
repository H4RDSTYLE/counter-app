import React, { Component } from 'react';
import Counter from './counter';
import Total from './total';

class CounterHolder extends Component {
    
    state = {
        counters: this.props.data,
        precioTotal: this.getPrecio(this.props.data),
    };

    handleDelete = (key)=>{
        var counters = this.state.counters.filter(c => c.id !== key.id);
        this.setState({counters});
        var precioTotal = this.getPrecio(counters);
        this.setState({precioTotal});
    }

    handleIncrement = (key)=>{
        const counters = [...this.state.counters];
        var id = counters.indexOf(key);
        counters[id].value++;
        this.setState({counters});
        var precioTotal = this.getPrecio(counters);
        this.setState({precioTotal});
    }

    handleDecrement = (key)=>{
        const counters = [...this.state.counters];
        var id = counters.indexOf(key);
        if(counters[id].value>0){
            counters[id].value--;
            this.setState({counters});
        }
        var precioTotal = this.getPrecio(counters);
        this.setState({precioTotal});
    }

    handleResetValue = (key)=>{
        const counters = [...this.state.counters];
        var id = counters.indexOf(key);
        counters[id].value = 0;
        this.setState({counters});
        var precioTotal = this.getPrecio(counters);
        this.setState({precioTotal});
    }

    
    render() { 
        return (<div>
                    <table>
                        <tbody>
                            {this.state.counters.map(counter => (<Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onReset={this.handleResetValue} />))}
                        </tbody>
                    </table>
                    <Total total={this.state.precioTotal}/>
                </div>);
    }

    getPrecio(counters){
        var precioTotal = 0;
        for(var i = 0; i<counters.length; i++){
            var counter = counters[i];
            precioTotal+= counter.value * counter.elementUnitaryPrice;
        }
        return Math.round((precioTotal + Number.EPSILON) *100) / 100;
    }

}
 
export default CounterHolder;