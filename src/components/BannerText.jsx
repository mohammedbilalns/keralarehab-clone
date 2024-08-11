function BannerText(props) {
  return (
    <>
      <h1 className="mb-4">{props.title}</h1>
      <p className="mb-4">{props.text}</p>
    </>
  );
}

export default BannerText;
