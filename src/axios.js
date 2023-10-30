import axios from "axios";

const ApiKey = "20d4a875";

const getMovies = async function (MovieArray) {
  const resultArray = [];
  for (const movie of MovieArray) {
    const result = await axios.get(
      ` http://www.omdbapi.com/?i=tt3896198&apikey=${ApiKey}&s=${movie}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    resultArray.push(result.data.Search);
  }
  return resultArray;
};

export const Movies = { getMovies };
