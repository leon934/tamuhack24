function Survey(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.handleClose();
        props.handleConfirmation();
    }
    return (
        <>
            <div className="popup-box">
                <div className="box">
                    <button className="btn-close" onClick={props.handleClose}>x</button>
                    {props.content}
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="Give us your feedback" cols={75} rows={10} name="feedback" />
                        <button id="surveySubmit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Survey;