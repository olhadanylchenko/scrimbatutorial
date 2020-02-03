/* eslint-disable no-unreachable */
import React from "react";

function DateField() {
    const date = new Date();
    function monthDetector (date) {
        switch (date.getMonth()) {
            case 0:
                return "January";
                break;
            case 1:
                return "February";
                break;
            case 2:
                return "March";
                break;
            case 3:
                return "April";
                break;
            case 4:
                return "May";
                break;
            case 5:
                return "June";
                break;
            case 6:
                return "July";
                break;
            case 7:
                return "August";
                break;
            case 8:
                return "September";
                break;
            case 9:
                return "October";
                break;
            case 10:
                return "November";
                break;
            case 11:
                return "December";
                break;
            default:
                return "Oops";
        }
    };
    function thDetector (date) {
        if ((date.getDate()-1)*(date.getDate()-20) <= 0 || (date.getDate()-24)*(date.getDate()-30) <= 0) {
            return "th";
        } else if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31) {
            return "st";
        } else if (date.getDate() === 2 || date.getDate() === 22) {
            return "nd";
        } else {
                return "rd";
        };
    }
    return (
        <header className="datefield">Today is {`${monthDetector(date)} ${date.getDate()}${thDetector(date)}, ${date.getFullYear()}`}</header>
    );
};

export default DateField;