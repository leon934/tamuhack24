import Navbar from "./navbar.js";
import Runway from "./runway.js";
import { useEffect, useState } from "react";

function Runways() {
    // useEffect(() => {
    //     const numOfRunways = 7;
    //     for (let i = 0; i < numOfRunways; i++) {
    //         myRunways.push(i);
    //     }
    // }, []) // Only runs after initial render

    // runwayAvailability is array of true or false values
    const renderRunways = (runwayAvailability) => {
        let myRunways = [];
        for (let i = 0; i < runwayAvailability.length; i++) {
            myRunways.push(<Runway runwayNumber={i} isAvailable={runwayAvailability[i]} />)
        }
        return myRunways;
    }

    return (
        <>
            <Navbar />
            <h1>Runways</h1>
            <table>
                <tr>
                    <th>Runway Number</th>
                    <th>Flight</th>
                </tr>
                {renderRunways([true, false, true, false])}
            </table>
        </>
    )
}

export default Runways;