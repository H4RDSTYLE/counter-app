import React, { Component} from 'react';

class Counter extends Component {

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() {

        return(<tr>
                <td><h5 className="badge">{this.props.counter.elementName}</h5></td>
                <td><span className="badge">{this.props.counter.elementUnitaryPrice}$<span className="badge m-2 badge-primary">{this.props.counter.value}</span></span></td>
                <td><button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-success">+</button></td>
                <td><button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-danger">-</button></td>
                <td><button onClick={() => this.props.onReset(this.props.counter)} className="btn btn-primary">c</button></td>
                <td><button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-secondary">🗑️</button></td>
            </tr>);
    }
}
 
export default Counter;