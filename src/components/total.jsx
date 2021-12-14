import React, { Component } from 'react';
import "../styles/total.css";

class Total extends Component {


    render() { 
        return <div>
            <hr width="300px"/><span className="badge">Total: {this.props.total}$</span>
        </div>;
    }
}
 
export default Total;