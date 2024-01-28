import Navbar from "./navbar.js";

function Home() {
    return (
        <>
            <Navbar />
            <div id="HomePage">
                <h1>Automated Airline Traffic</h1>
                <div>In a world where increasing traffic congestion is bad, we solve that problem by automating air traffic control</div>
                <a href="/openrunways">Try it out</a>
            </div>
        </>
    )
}

export default Home;