import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function NavBar() {
  const location = useLocation().pathname.slice(1);

  const navButtons = [
    { id: 1, text: "About Us", url: "aboutus" },
    { id: 2, text: "Offers Made", url: "donations" },
    { id: 3, text: "Submit Details", url: "submissions" },
    { id: 4, text: "Contact Us", url: "contactus" },
  ]; // props of navbar buttons

  const isActive = (path) => location === path;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light px-3"
        style={{ backgroundColor: "#eef7fd" }}
      >
        <Link className="navbar-brand" to="/">
          <img
            src="logo.png"
            alt="a"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />
          Kerala Rehab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navButtons.map((navButton) => (
              <NavButton
                key={navButton.id}
                title={navButton.text}
                url={navButton.url}
                isActive={isActive(navButton.url)}
              />
            ))}
            {/* navbar buttons */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
