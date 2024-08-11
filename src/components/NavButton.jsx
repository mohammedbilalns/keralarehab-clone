import { Link } from "react-router-dom";

function NavButton(props) {
  return (
    <li className={`nav-item  ${props.isActive ? "active" : ""} `}>
      <Link
        className={`nav-link  ${props.isActive ? "active" : ""}}`}
        to={"/" + props.url}
      >
        {props.title} <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
}

export default NavButton;
