import Survey from "./survey.js";
import Popup from "./popup.js";
import { useState } from "react"

function FeedbackComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const toggleConfirmation = () => {
        setConfirmationOpen(!confirmationOpen);
    }
    return (
        <>
            <button id="survey" onClick={togglePopup}><img src={require("./feedbackIcon.png")} alt="Feedback"></img></button >
            {isOpen && <Survey
                handleClose={togglePopup}
                handleConfirmation={toggleConfirmation}
                content={<div>
                    <h3>Feedback Survey</h3>
                </div>}
            />
            }
            {
                confirmationOpen && <Popup
                    message={<div>Your feedback has been recieved</div>}
                    handleClose={toggleConfirmation}
                />
            }
        </>
    )
}

export default FeedbackComponent;