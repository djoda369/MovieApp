import { useEffect, useState } from "react";
import "./App.scss";
import { Movies } from "./axios";
import RowContainer from "./components/Container";

function App() {
  const [movieRows, setMovieRows] = useState([]);

  const movieArray = ["Batman", "Superman", "Avengers"];

  useEffect(() => {
    const fetchData = async function () {
      const result = await Movies.getMovies(movieArray);
      setMovieRows(result);
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
