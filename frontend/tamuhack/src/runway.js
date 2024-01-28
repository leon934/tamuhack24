function Runway({ runwayNumber, timeFlightOnRunway, flightNumber }) {
    return (
        <tr key={runwayNumber}>
            <td>{runwayNumber}</td>
            <td>{(timeFlightOnRunway > 0) ? <div>{timeFlightOnRunway} minutes</div> : <div>None</div>}</td>
            <td><a dataset-url={flightNumber}>{flightNumber}</a></td>
        </tr>
    )
}

export default Runway;