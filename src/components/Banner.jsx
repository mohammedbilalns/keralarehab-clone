import BannerText from "./BannerText";
import BannerButton from "./BannerButton";

function Banner() {
  const bannerTextProp = [
    {
      id: 1,
      title: "Welcome to Kerala Rehab",
      text: "  Welcome to Kerala Rehab, a dedicated platform for tracking and ensuring the fulfillment of offers and promises made by individuals, firms, and society to help the victims of the Wayanad Landslide 2024. Our mission is to ensure that all pledges of aid are met and that those in need receive the support they deserve.",
    },
  ]; // props of banner text

  const buttonProp = [
    {
      id: 1,
      text: "See Offers",
      url: "donations",
      buttonColor: "btn-primary",
      buttonSize: "btn-lg",
    },
    {
      id: 2,
      text: "Add Offers",
      url: "submissions",
      buttonColor: "btn-success",
      buttonSize: "btn-lg",
    },
  ]; // props of banner buttons

  return (
    <>
      <div className="container text-center mt-5">
        <BannerText
          title={bannerTextProp[0].title}
          text={bannerTextProp[0].text}
        ></BannerText>

        <div>
          {buttonProp.map((button) => (
            <BannerButton
              key={button.id}
              text={button.text}
              url={button.url}
              buttonColor={button.buttonColor}
              buttonSize={button.buttonSize}
            />
          ))}{" "}
          {/* render buttons below banner text */}
        </div>
        <div className="mb-4"></div>
      </div>
    </>
  );
}

export default Banner;
