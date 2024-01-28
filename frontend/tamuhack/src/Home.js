import Navbar from "./navbar.js";
import Survey from "./survey.js";
import Popup from "./popup.js";
import Logo from "./Logo.js";
import { useState } from "react"

function Home() {
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
            <Navbar />
            <div id="HomePage">
                <Logo fontSize={40} />
                <div>In a world where increasing traffic congestion is bad, we solve that problem by automating air traffic control</div>
                <a href="/openrunways">Try it out</a>
            </div>
            <button id="survey" onClick={togglePopup}>Rate Our Website!</button>
            {isOpen && <Survey
                handleClose={togglePopup}
                handleConfirmation={toggleConfirmation}
                content={<div>
                    <h3>Feedback Survey</h3>
                </div>}
            />}
            {confirmationOpen && <Popup
                message={<div>Your feedback has been recieved</div>}
                handleClose={toggleConfirmation}
            />}
        </>
    )
}

export default Home;