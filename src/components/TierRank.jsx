import Movie from "./Movie.jsx";

function TierRank({ rank }) {
  return (
    <div className="rankContainer">
      <hr />
      <div className="rankTitle">{rank[0]}</div>
      <div className="moviesInRank">
        {rank[1].map((movie, index) => (
          <Movie movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TierRank;
