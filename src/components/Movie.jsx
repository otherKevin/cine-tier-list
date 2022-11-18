function Movie({ movie }) {
  return (
    <div className="movieContainer">
      <div className="movieTitle">{movie.title}</div>
      <div className="moviePicture">{movie.imageLink}</div>
      <br />
    </div>
  );
}

export default Movie;
