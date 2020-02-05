import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            people: {},
        };
    };
    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                people: data
            })
        });
    };
    render() {
        return (
            <main>
                <div>{this.state.loading ? `Please wait` : this.state.people.name}</div>
            </main>
        )
    }
}

export default App;