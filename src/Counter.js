
import React from "react"; 
export default class Counter extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            count: 0, //set the default value of counter to 0 
        }
    }

    //the function will set the value of counter when just load the page to 15 skiers
    componentDidMount() {
        this.setState({
            count: this.state.count + 15
        })
    }

    //the substract function will minus one skier each time push the "-" button
    subtract = () => {
        this.setState({
            count: this.state.count -1, 
        })
    }

    add = () => {
        this.setState({
            count: this.state.count + 1, 
        })
    }
    render(){
        return(
            <div id="counter" style={
                {
                    'display': "flex", 
                    'flex-direction': "row", 
                    'justifyContent': "center", 

                }
            }>
                <button onClick={this.subtract} style={
                    {
                        'background-color': "red", 
                        'color': "white", 
                    }
                }>-</button>

                <h3>{this.state.count} Skiers(s)</h3>

                <button onClick={this.add} style={
                    {
                        'background-color': "green", 
                        'color': "white", 
                    }
                }>+</button>

            </div>
        ); 
    } 
}
