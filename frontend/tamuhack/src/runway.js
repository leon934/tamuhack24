function Runway({ runwayNumber, isAvailable, flightNumber }) {
    return (
        <tr key={runwayNumber}>
            <td>{runwayNumber}</td>
            <td>{isAvailable ? <div>Yes</div> : <div>No</div>}</td>
            <td><a dataset-url={flightNumber}>{flightNumber}</a></td>
        </tr>
    )
}

export default Runway;