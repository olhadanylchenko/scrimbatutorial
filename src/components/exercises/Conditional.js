import React from "react";

function Conditional(props) {
    console.log(props.isLoggedIn);
    // function handleClick(e) {
    //     e.preventDefault();
    // };
    let text = `You are logged ${props.isLoggedIn ? `in` : `out`}`;
    let button = `Log ${props.isLoggedIn ? `out` : `in`}`;
    return (
        <div>
            <h1>{text}</h1>
            <button type="button" onClick={props.handleChange}>{button}</button>
        </div>
    )
}

export default Conditional;