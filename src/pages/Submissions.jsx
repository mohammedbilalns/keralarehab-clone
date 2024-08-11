import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BannerButton from "../components/BannerButton";
import BannerText from "../components/BannerText";
import { Link } from "react-router-dom";
// import MarkdownViewer from "../components/MarkdowRender";
function Submissions() {
  const detailsToSubmit = [
    "Promise Given/വാഗ്ദാനം",
    "Promiser Name/വാഗ്ദാനം നൽകിയ ആളുടെ പേര്",
    "Date of Promise/വാഗ്ദാനം നൽകിയ തിയ്യതി",
    "Details/വിശദാംശങ്ങൾ",
    "Reference Links/ലിങ്കുകൾ",
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <BannerText
            text="We appreciate what your support. Please ensure you have the
            following details ready for submission."
          ></BannerText>
          <ul className="list-group mb-4">
            {detailsToSubmit.map((detail, index) => (
              <li key={index} className="list-group-item">
                {detail}
              </li>
            ))}
          </ul>
          <p className="font-weight-bold mb-0 mt-4 mb-4">
            Before proceeding, please verify that the information you are about
            to add is not already available on{" "}
            <Link to="/donations"> Existing Offers</Link>
          </p>

          <BannerButton
            url="https://forms.gle/yiCUD4DgBERtCzjL6"
            text="Click Here to Submit Details"
            buttonColor="btn-primary"
          ></BannerButton>
        </div>
      </div>

      {/* <MarkdownViewer></MarkdownViewer> */}
      <Footer></Footer>
    </div>
  );
}
export default Submissions;
