import React from "react";

import JokeUnit from "./JokeUnit.js";
import jokesDatabase from "../jokesDatabase.js";

class Jokes extends React.Component {
    render() {
        const jokes = jokesDatabase.map(joke => {
            return (
                <JokeUnit key={joke.id} question={joke.question} punchLine={joke.punchLine} />
            );
        });
        return (
            <div id="4" className="jokes">
                <h4>A whole lot of cat jokes!</h4>
                <div>{jokes[0]}</div>
                <div>{jokes[1]}</div>
                <div>{jokes[2]}</div>
                <div>{jokes[3]}</div>
                <div>{jokes[4]}</div>
                <div>{jokes[5]}</div>
            </div>
        );
    }
};

// function Jokes() {
//     const jokes = jokesDatabase.map(joke => {
//         return (
//             <JokeUnit key={joke.id} question={joke.question} punchLine={joke.punchLine} />
//         );
//     });
//     return (
//         <div id="4" className="jokes">
//             <h4>A whole lot of cat jokes!</h4>
//             <div>{jokes[0]}</div>
//             <div>{jokes[1]}</div>
//             <div>{jokes[2]}</div>
//             <div>{jokes[3]}</div>
//             <div>{jokes[4]}</div>
//             <div>{jokes[5]}</div>
//         </div>
//     )
// }

export default Jokes;