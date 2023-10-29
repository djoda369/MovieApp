import { useEffect, useState } from "react";
import "./App.scss";
import { Movies } from "./axios";
import RowContainer from "./components/Container";

function App() {
  const [movieRows, setMovieRows] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const result1 = await Movies.getMovies("batman");
      const movies1 = result1.data.Search;
      const result2 = await Movies.getMovies("superman");
      const movies2 = result2.data.Search;
      const result3 = await Movies.getMovies("avengers");
      const movies3 = result3.data.Search;
      setMovieRows([movies1, movies2, movies3]);
    };
    fetchData();
  }, []);

  return (
    <>
      <RowContainer movieRows={movieRows} />
    </>
  );
}

export default App;
