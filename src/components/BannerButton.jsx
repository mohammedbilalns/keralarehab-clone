import { Link } from "react-router-dom";
function BannerButton(props) {
  const buttonClass =
    "btn btn-primary mr-2 " + props.buttonColor + " " + props.buttonSize;

  return (
    <Link to={"/" + props.url} className={buttonClass}>
      {props.text}
    </Link>
  );
}

export default BannerButton;
