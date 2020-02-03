import React from "react";
import ContactCard from "./ContactCard.js";

class Contacts extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: "Yes",
        };
    };
    render() {
        return (
            <div id="3" className="contacts">
            <h3>My contacts</h3>
            {/* <p>Is state important? {this.state.answer}</p> */}
            <div className="contactsContainer">
                <ContactCard 
                contact = {{name: "Mr. Kittens", imgUrl: "https://placekitten.com/200/150?random", email: "ert@fdsa.ry", phone: "456789"}}
                 />
                <ContactCard 
                contact = {{name: "Mr. Pawny", imgUrl: "https://placekitten.com/250/100", email: "dasfa@wrtw.yu", phone: "23124"}} />
                <ContactCard 
                contact = {{name: "Ms. Whiskerson", imgUrl: "https://placekitten.com/200/100?random", email: "adfa@aff.cas", phone: "363456" }}/>
                <ContactCard
                contact = {{name: "Mr. Tails", imgUrl: "https://placekitten.com/200/150", email: "adfa@asdfasd.sd", phone: "none"}} />
                <ContactCard
                contact={{name: "Lady Claw", imgUrl: "https://placekitten.com/250/150"}} />
            </div>
        </div>
        );
    }
};

// function Contacts() {
//     return (
//         <div id="3" className="contacts">
//             <h3>My contacts</h3>
//             <div className="contactsContainer">
//                 <ContactCard 
//                 contact = {{name: "Mr. Kittens", imgUrl: "https://placekitten.com/200/150?random", email: "ert@fdsa.ry", phone: "456789"}}
//                  />
//                 <ContactCard 
//                 contact = {{name: "Mr. Pawny", imgUrl: "https://placekitten.com/250/100", email: "dasfa@wrtw.yu", phone: "23124"}} />
//                 <ContactCard 
//                 contact = {{name: "Ms. Whiskerson", imgUrl: "https://placekitten.com/200/100?random", email: "adfa@aff.cas", phone: "363456" }}/>
//                 <ContactCard
//                 contact = {{name: "Mr. Tails", imgUrl: "https://placekitten.com/200/150", email: "adfa@asdfasd.sd", phone: "none"}} />
//                 <ContactCard
//                 contact={{name: "Lady Claw", imgUrl: "https://placekitten.com/250/150"}} />
//             </div>
//         </div>
//     )
// }

export default Contacts;