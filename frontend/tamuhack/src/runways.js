import Navbar from "./navbar.js";
import Runway from "./runway.js";
import FeedbackComponent from "./feedbackComponent.js";
import ChatBot from "./Bot.js";
import { useEffect, useState } from "react";
import useFetch from "./useFetch.js";
function Runways() {
    const NUMOFRUNWAYS = 7;
    const [flightNum, setFlightNum] = useState(7);  // 7 runways at DFW
    const [myArr, setMyArr] = useState([-1, 0, 1, 2, 3, 4, 5])
    const [runwayAvailability, setRunwayAvailability] = useState([true, false, false, false, false, false, false]);


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
            // copy arr
            var copyArr = []
            for (let i = 0; i < 7; i++) {
                copyArr.push(myArr[i]);
            }
            copyArr[flightNum % NUMOFRUNWAYS] = flightNum;
            copyArr[((flightNum % NUMOFRUNWAYS) + 1) % NUMOFRUNWAYS] = 0;
            var copyAvailability = [];
            for (let i = 0; i < 7; i++) {
                copyAvailability.push(false);
            }
            copyAvailability[((flightNum % NUMOFRUNWAYS) + 1) % NUMOFRUNWAYS] = true;
            setRunwayAvailability(copyAvailability)
            setMyArr(copyArr);
        }, 1000)

        return () => clearInterval(intervalID);
    }, [flightNum])

    const renderRunways = (runwayAvailability, data, flightNum) => {
        if (data && myArr) {
            let myRunways = [];
            for (let i = 0; i < 7; i++) {
                // Change one at a time. 14th takes place of 7th one takes place of 0th
                // 13th takes place of 6th
                // base num is the one at beginning of list
                if (myArr[i] > 0) {
                    myRunways.push(<Runway key={i} runwayNumber={i} isAvailable={runwayAvailability[i]} flightNumber={data[myArr[i]].flightNumber} />)
                } else {
                    myRunways.push(<Runway key={i} runwayNumber={i} isAvailable={runwayAvailability[i]} flightNumber={0} />)
                }
            }
            return myRunways;
        } else {
            return <tr></tr>
        }
    }
    // 0 1 2 3 4 5 6 -> 7 1 2 3 4 5 6 -> 7 8 2 3 4 5 6 -> 7 8 9 3 4 5 6
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