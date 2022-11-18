import "./App.css";
import films from "./films.json";
import Header from "./components/Header.jsx";
import TierRank from "./components/TierRank.jsx";
import Movie from "./components/Movie.jsx";

const tableau = Object.entries(films.list);
console.log(tableau[0]);

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header site={films} />
      </div>
      <section className="mainContent"></section>
      <div className="tierRank">
        {tableau.map((rank, index) => (
          <TierRank rank={rank} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
