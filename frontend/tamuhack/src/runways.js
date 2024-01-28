import Navbar from "./navbar.js";
import Runway from "./runway.js";
// import { useEffect, useState } from "react";
// import useFetch from "./useFetch.js";

function Runways() {
    // const [url, setUrl] = useState("")
    const renderRunways = (runwayAvailability, flightNumbers) => {
        let myRunways = [];
        for (let i = 0; i < runwayAvailability.length; i++) {
            myRunways.push(<Runway key={flightNumbers[i]} runwayNumber={i} isAvailable={runwayAvailability[i]} flightNumber={flightNumbers[i]} />)
        }
        return myRunways;
    }
    const flightNumbers = [2005, 2010, 448, 2978]
    const runwayAvailability = [true, false, true, false]

    return (
        <>
            <Navbar />
            <table id="runwaydata">
                <tbody>
                    <tr>
                        <th class="runwaydata-header">Runway Number</th>
                        <th class="runwaydata-header">Available</th>
                        <th class="runwaydata-header">Flight Number</th>
                    </tr>
                    {renderRunways(runwayAvailability, flightNumbers)}
                </tbody>
            </table>
        </>
    )
}

export default Runways;