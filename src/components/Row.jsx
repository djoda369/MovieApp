import "./styles.scss";
import Card from "./Card";
import { useEffect, useState, useRef } from "react";

export default function Row({
  movies,
  heighlighted,
  seeMoreInfo,
  setSeeMoreInfo,
}) {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [scrollPoisition, setScrollPosition] = useState(0);
  const [seeInfo, setSeeInfo] = useState(false);

  const rowRef = useRef(null);

  const navigateRight = () => {
    if (selectedMovie < movies.length - 1) {
      setScrollPosition((prevstate) => prevstate - 310);
      setSelectedMovie((prevstate) => prevstate + 1);
    }
  };

  const navigatLeft = () => {
    if (selectedMovie > 0) {
      setSelectedMovie((prevstate) => prevstate - 1);
      setScrollPosition((prevstate) => prevstate + 310);
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      const maxScrollPosition = -((movies.length - 1) * 310);
      if (event.key === "ArrowLeft") {
        if (!seeInfo) {
          if (heighlighted === true) {
            navigatLeft();
            if (scrollPoisition === 0) {
              rowRef.current.style.transform = `translateX(${0}px)`;
            } else {
              rowRef.current.style.transform = `translateX(${
                scrollPoisition + 310
              }px)`;
            }
          }
        }
      } else if (event.key === "ArrowRight") {
        if (heighlighted === true) {
          if (!seeInfo) {
            navigateRight();
            if (scrollPoisition === maxScrollPosition) {
              rowRef.current.style.transform = `translateX(${maxScrollPosition}px)`;
            } else {
              rowRef.current.style.transform = `translateX(${
                scrollPoisition - 310
              }px)`;
            }
          }
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMovie, heighlighted, scrollPoisition, seeInfo]);

  return (
    <main>
      <ul className="row" ref={rowRef}>
        {movies.map((movieData, i) => {
          if (i === selectedMovie && heighlighted === true) {
            return (
              <li key={i} className="highlighted">
                <Card
                  data={movieData}
                  highlighted={true}
                  seeMoreInfo={seeMoreInfo}
                  setSeeMoreInfo={setSeeMoreInfo}
                  setSeeInfo={setSeeInfo}
                />
              </li>
            );
          }
          return (
            <li key={i}>
              <Card
                data={movieData}
                highlighted={false}
                seeMoreInfo={seeMoreInfo}
                setSeeMoreInfo={setSeeMoreInfo}
                setSeeInfo={setSeeInfo}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
