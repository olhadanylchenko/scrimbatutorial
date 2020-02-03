import React from "react";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    };
    render() {
        return (
        <a href={this.props.url}>{this.props.name}</a>
        );
    }
};

export default Navbar;