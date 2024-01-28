import Navbar from "./navbar.js";
import Runway from "./runway.js";
import { useEffect, useState } from "react";
// import useFetch from "./useFetch.js";
function Runways() {
    const renderRunways = (runwayAvailability, flightNumbers) => {
        let myRunways = [];
        for (let i = 0; i < runwayAvailability.length; i++) {
            myRunways.push(<Runway key={flightNumbers[i]} runwayNumber={i} timeFlightOnRunway={runwayAvailability[i]} flightNumber={flightNumbers[i]} />)
        }
        return myRunways;
    }
    const flightNumbers = [2005, 2010, 448, 2978]
    const [runwayAvailability, setRunwayAvailability] = useState([100, -1, -1, 100]);

    useEffect(() => {
        const incremenetAllAvailability = () => {
            let newArr = [];
            for (let i = 0; i < runwayAvailability.length; i++) {
                newArr.push(runwayAvailability[i] + 1);
            }
            console.log(newArr)
            setRunwayAvailability(newArr);
        }
        const intervalID = setInterval(() => {
            incremenetAllAvailability();
        }, 1000 * 60)

        return () => {
            clearInterval(intervalID)
        }
    }, [runwayAvailability])

    return (
        <>
            <Navbar />
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Runway Number</th>
                        <th>How Long Flight On Runway</th>
                        <th>Flight Number</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRunways(runwayAvailability, flightNumbers)}
                </tbody>
            </table>
        </>
    )
}

export default Runways;