import Navbar from "./navbar.js";
import Logo from "./Logo.js";
import FeedbackComponent from "./feedbackComponent.js";

function Home() {
    return (
        <>
            <Navbar />
            <div id="HomePage">
                <Logo fontSize={40} />
                <div>In a world where increasing traffic congestion is bad, we solve that problem by automating air traffic control</div>
                <a href="/runways">Try it out</a>
            </div>
            <FeedbackComponent />
        </>
    )
}

export default Home;