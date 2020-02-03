import React, { Component } from "react";
import Conditional from "./Conditional.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
        };
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn,
            }
        })
    };
    // render() {
    //     let text = `You are logged ${this.state.isLoggedIn ? `in` : `out`}`;
    //     let button = `Log ${this.state.isLoggedIn ? `out` : `in`}`;
    //     return (
    //         <main>
    //             {/* <Conditional handleClick={this.handleClick}/> */}
    //             <div>
    //                 <h1>{text}</h1>
    //                 <button type="button" onClick={this.handleClick}>{button}</button>
    //             </div>
    //         </main>
    //     )
    // }
    render() {
        return (
            <main>
                <Conditional handleClick={this.handleClick} isLoggedIn={this.state.isLoggedIn} />
            </main>
        )
    }
}

export default App;