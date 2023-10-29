import axios from "axios";

const ApiKey = "20d4a875";

const getMovies = async function (name) {
  const result = await axios.get(
    ` http://www.omdbapi.com/?i=tt3896198&apikey=${ApiKey}&s=${name}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return result;
};

export const Movies = { getMovies };
