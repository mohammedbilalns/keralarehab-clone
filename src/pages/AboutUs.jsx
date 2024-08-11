import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BannerText from "../components/BannerText";

function AboutUs() {
  const bannerTextProp = [
    {
      id: 1,
      title: "Kerala Rehab - Wayanad Landslide 2024 Aid Tracker",
      text1:
        "  Welcome to Kerala Rehab, a dedicated platform for tracking and ensuring the fulfillment of offers and promises made by individuals, firms, and society to help the victims of the Wayanad Landslide 2024. Our mission is to ensure that all pledges of aid are met and that those in need receive the support they deserve.  ",
      text2:
        " Our website is run by a committed group of volunteers who tirelessly collect, verify, and document data from various public sources. By doing so, we provide transparency and accountability, making sure that every promise is turned into action and every victim gets the help they need. ",
      text3:
        " Join us in our mission to make a difference. Explore the offers, see the impact, and contribute to the cause. Together, we can rebuild and restore the lives affected by this devastating event ",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <div className="container text-center mt-5">
        <BannerText
          title={bannerTextProp[0].title}
          text={bannerTextProp[0].text1}
        ></BannerText>
        <BannerText title="" text={bannerTextProp[0].text2}></BannerText>
        <BannerText title="" text={bannerTextProp[0].text3}></BannerText>

        <div className="mb-4"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default AboutUs;
