import React, { Component} from 'react';

class Counter extends Component {

    state = {
        id: this.props.id,
        count: this.props.value,
        functionDelete: this.props.onDelete,
        elementName: this.props.elementName,
        elementUnitaryPrice: this.props.elementUnitaryPrice,
        textButtonDecrement: this.getTextButtonDecrement(this.props.value),
        styleButtonDecrement: this.getStyleButtonDecrement(this.props.value),
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() {

        let classes = this.getStyle();

        return <React.Fragment>
            <tr>
                <td><h5 className="badge">{this.state.elementName}</h5></td>
                <td><span className="badge">{this.state.elementUnitaryPrice}$<span style={this.styles} className={classes}>{this.state.count}</span></span></td>
                <td><button onClick={this.incrementValue} className="btn btn-secondary btn-success">+</button></td>
                <td><button onClick={this.gestionButton} className={this.state.styleButtonDecrement}>{this.state.textButtonDecrement}</button></td>
            </tr>
            </React.Fragment>;
    }

    gestionButton = () => {
        if(this.state.textButtonDecrement==="-"){
            this.decrementValue();
        }else{
            this.props.onDelete(this.props.id);
        }
    }

    getStyle() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    incrementValue = ()=>{
        this.setState({count: this.state.count + 1});
        this.setState({textButtonDecrement: "-"});
        this.setState({styleButtonDecrement: "btn btn-secondary btn-warning"});
    }

    decrementValue = ()=>{
        let value = this.state.count;
        if(!(value<1)){
            this.setState({count: this.state.count - 1});
        }
        console.log(this.state.count);
        if(this.state.count-1<=0){
            this.setState({textButtonDecrement: "🗑️"});
            this.setState({styleButtonDecrement: "btn btn-secondary btn-danger"});
        }else{
            this.setState({textButtonDecrement: "-"});
            this.setState({styleButtonDecrement: "btn btn-secondary btn-warning"});
        }
    }

    getTextButtonDecrement(number){
        if(number>0){
            return "-"
        }
        return "🗑️";
    }

    getStyleButtonDecrement(number){
        if(number>0){
            return "btn btn-secondary btn-warning";
        }
        return "btn btn-danger";
    }


}
 
export default Counter;