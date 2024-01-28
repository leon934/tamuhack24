import { useEffect, useState } from "react";

const useFetch = ({ day, month, year }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const compareByArrival = (flight1, flight2) => {
            const date1 = new Date(flight1.arrivalTime);
            const date2 = new Date(flight2.arrivalTime);
            if (date1 < date2) {
                return -1;
            }
            else if (date1 > date2) {
                return 1;
            }
            return 0;
        }
        fetch(`https://aircontrol1-c8a7574536ec.herokuapp.com/flights?date=${year}-${month}-${day}&destination=DFW`)
            .then(response =>
                response.json())
            .then(myData => {
                // convert to Javascript object array
                myData.sort(compareByArrival);
                setData(myData);
            })
    }, [day, month, year]) //only run when day month year change
    return { data };
}

export default useFetch;