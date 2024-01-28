function Runway({ runwayNumber, isAvailable }) {
    return (
        <tr>
            <td>{runwayNumber}</td>
            <td>{isAvailable ? <div>Is Available</div> : <div>Not Available</div>}</td>
        </tr>
    )
}

export default Runway;