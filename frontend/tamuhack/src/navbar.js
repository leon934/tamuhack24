import Logo from "./Logo.js";

function Navbar() {
    return (
        <div id="navbar">
            <ul id="navbar-content">
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/runways"}>Runways</a> </li>
            </ul>
            <Logo fontSize={20} />
        </div>
    );
}
export default Navbar;