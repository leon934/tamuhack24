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
    const [count, setCount] = useState(0);

    // const changeOneAvailability = (runwayIndex, newTime) => {
    //     let newArr = [];
    //     for (const element in runwayAvailability) {
    //         newArr.push(element);
    //     }
    //     newArr[runwayIndex] = newTime;
    //     setRunwayAvailability(newArr);
    // }
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
            <table id="runwaydata">
                <tbody>
                    <tr>
                        <th className="runwaydata-header">Runway Number</th>
                        <th className="runwaydata-header">How Long Flight On Runway</th>
                        <th className="runwaydata-header">Flight Number</th>
                    </tr>
                    {renderRunways(runwayAvailability, flightNumbers)}
                </tbody>
            </table>
        </>
    )
}

export default Runways;