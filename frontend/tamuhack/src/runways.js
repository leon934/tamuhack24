import Navbar from "./navbar.js";
import Runway from "./runway.js";
import FeedbackComponent from "./feedbackComponent.js";
import ChatBot from "./Bot.js";
import { useEffect, useState } from "react";
import useFetch from "./useFetch.js";
function Runways() {
    const NUMOFRUNWAYS = 7;
    const [flightNum, setFlightNum] = useState(0);  // 7 runways at DFW

    const today = new Date(); // Find today's date which will grab today's flights.
    // around 3 minutes to clear the runway

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    year = year.toString();
    month = month.toString();
    day = day.toString();

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }

    const { data } = useFetch({ day, month, year }) // get flight data in sorted by arrival in an array

    useEffect(() => {
        const intervalID = setInterval(() => {
            setFlightNum(flightNum + 1)
        }, 1000)

        return () => clearInterval(intervalID);
    }, [flightNum])

    const renderRunways = (runwayAvailability, data, flightNum) => {
        if (data) {
            let myRunways = [];
            for (let i = flightNum; i < flightNum + NUMOFRUNWAYS; i++) {
                myRunways.push(<Runway key={data[i].flightNumber} runwayNumber={i % NUMOFRUNWAYS} isAvailable={runwayAvailability[i]} flightNumber={data[i].flightNumber} />)
            }
            return myRunways;
        } else {
            return <div></div>
        }
    }
    const [runwayAvailability, setRunwayAvailability] = useState([false, false, false, false, false, false, false]);
    return (
        <>
            <Navbar />
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Runway Number</th>
                        <th>Is Available</th>
                        <th>Flight Number</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRunways(runwayAvailability, data, flightNum)}
                </tbody>
            </table>
            <FeedbackComponent />
            <ChatBot />
        </>
    )
}

export default Runways;