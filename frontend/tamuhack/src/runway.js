function Runway({ runwayNumber, isAvailable, flightNumber }) {
    return (
        <tr key={runwayNumber}>
            <td>{runwayNumber}</td>
            <td>{(isAvailable) ? <div>Yes</div> : <div>No</div>}</td>
            <td><a>{(flightNumber != 0 && flightNumber)}</a></td>
        </tr>
    )
}

export default Runway;