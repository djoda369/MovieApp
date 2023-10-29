import "./styles.scss";

export default function MovieInfo({ data }) {
  return (
    <div className="container">
      <div className="image__container">
        <img src={data.Poster} />
      </div>
      <div className="text__container">
        <h1>{data.Title}</h1>
        <h2>Year</h2>
        <h2>{data.Year}</h2>
        <h2>Type</h2>
        <h2>{data.Type}</h2>
      </div>
    </div>
  );
}
