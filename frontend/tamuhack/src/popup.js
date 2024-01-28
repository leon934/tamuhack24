function Popup({ message, handleClose }) {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={handleClose}>x</button>
                <div className="message">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Popup;