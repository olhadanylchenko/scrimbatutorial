import React from "react";

import Navbar from "./components/Navbar.js";
import navDatabase from "./navDatabase.js";
import DateField from "./components/DateField.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    };
    render() {
        const navbar = navDatabase.map(nav => <Navbar key={nav.id} name={nav.name} url={`#${nav.id}`} />);
        return (
            <div className="container">
                <nav>{navbar[0]} {navbar[1]} {navbar[2]} {navbar[3]}</nav>
                <DateField />
                <Main />
                <Footer />
            </div>
        )
    }
}

// function App() {
//     const navbar = navDatabase.map(nav => <Navbar key={nav.id} name={nav.name} url={`#${nav.id}`} />);
//     return (
//         <div className="container">
//             <nav>{navbar[0]} {navbar[1]} {navbar[2]} {navbar[3]}</nav>
//             <DateField />
//             <Main />
//             <Footer />
//         </div>
//     );
// }

export default App;