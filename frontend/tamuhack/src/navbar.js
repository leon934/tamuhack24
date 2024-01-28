function Navbar() {
    return (
        <div id="navbar">
            <ul id="navbar-content">
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/openrunways"}>Open Runways</a> </li>
                <li><a href={"/AI"}>AI Software</a> </li>
            </ul>
            <p id="logo"><span style={{ color: "blue" }}>AI</span><span style={{ color: "grey" }}>r</span><span style={{ color: "red" }}>Control</span></p>
        </div>
    );
}
export default Navbar;