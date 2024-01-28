import Navbar from "./navbar.js";
import Logo from "./Logo.js";
import FeedbackComponent from "./feedbackComponent.js";

function Home() {
    return (
        <>
            <Navbar />
            <div id="HomePage">
                <Logo fontSize={40} />
                <div>
                    Air Congestion can cause huge delays. Automating the process leads to
                    more eco-friendly services, higher customer satisfaction, and has the potential
                    to compensate for the labor shortage after the pandemic.
                </div>
                <a href="/runways">Try it out</a>
            </div>
            <FeedbackComponent />
        </>
    )
}

export default Home;