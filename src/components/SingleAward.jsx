function SingleAward({ image, text }) {
  return (
    <div className="row row--vertical">
      <img src={image} />
      <p className="text  text--300-16">{text}</p>
    </div>
  );
}

export default SingleAward;
