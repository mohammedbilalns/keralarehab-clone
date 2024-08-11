import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function ContactUs() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <Card
        title="Contact Us"
        text="We'd love to hear from you. Click the button below to send us an email."
        link="mailto:keralarehab@gmail.com"
        mail="keralarehab@gmail.com"
      ></Card>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
