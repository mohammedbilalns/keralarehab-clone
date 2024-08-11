function Card(props) {
  return (
    <div className="par-card">
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.link} className="email-btn">
          Connect
        </a>
        <div className="email">{props.mail}</div>
      </div>
    </div>
  );
}

export default Card;
