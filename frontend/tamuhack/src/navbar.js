import Logo from "./Logo.js";

function Navbar() {
    return (
        <div id="navbar">
            <ul id="navbar-content">
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/openrunways"}>Open Runways</a> </li>
                <li><a href={"/Bot"}>AI Software</a> </li>
            </ul>
            <Logo fontSize={20} />
        </div>
    );
}
export default Navbar;