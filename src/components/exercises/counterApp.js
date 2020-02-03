import React, {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
        // this.handleClick = this.handleClick.bind(this);
        // this.doubleNumber = this.doubleNumber.bind(this);
        this.fibonacci = this.fibonacci.bind(this);
    };
    fibonacci() {
        this.setState(function(previousState) {
            let initialValue = previousState.counter;
            let secondValue;
            if (initialValue === 0 || initialValue === 1) {
                secondValue = 1;
            } else {
                secondValue = secondValue + initialValue
            }
            return { counter: initialValue + secondValue, }
        })
    }
    // handleClick() {
    //     this.setState(previousState => {
    //         return { counter: ++previousState.counter }
    //     })
    // };
    // doubleNumber() {
    //     this.setState(previousState => {
    //         return { counter: previousState.counter * 2}
    //     })
    // };
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>{this.state.counter}</h1>
                {/* <button onClick={this.handleClick}>Increment by 1</button>
                <button onClick={this.doubleNumber}>Double</button> */}
                <button onClick={this.fibonacci}>Fibonacci</button>
            </div>
        );
    }
}

export default App;