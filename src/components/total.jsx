import React, { Component } from 'react';
import "../styles/total.css";

class Total extends Component {

    state = {
        precioTotal: this.props.total,
    }

    render() { 
        return <div>
            <hr width="300px"/><span className="badge">Total: {this.state.precioTotal}$</span>
        </div>;
    }
}
 
export default Total;