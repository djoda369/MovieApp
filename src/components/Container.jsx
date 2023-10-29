import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import Row from "./Row";

export default function RowContainer({ movieRows }) {
  const [heighlightedRow, setHeightligtedRow] = useState(0);
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [seeMoreInfo, setSeeMoreInfo] = useState(false);

  const rowRef = useRef(null);

  const navigateUp = () => {
    if (heighlightedRow >= 1) {
      setHeightligtedRow((prevstate) => prevstate - 1);
      setVerticalScroll((prevstate) => prevstate + 534);
    }
  };

  const navigateDown = () => {
    if (heighlightedRow < movieRows.length - 1) {
      setHeightligtedRow((prevstate) => prevstate + 1);
      setVerticalScroll((prevstate) => prevstate - 534);
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      let maxScrollPosition = -(movieRows.length - 1) * 534;
      console.log(maxScrollPosition);

      if (event.key === "ArrowUp") {
        if (!seeMoreInfo) {
          navigateUp();
          if (verticalScroll === 0) {
            rowRef.current.style.transform = `translateY(${0}px)`;
          } else {
            rowRef.current.style.transform = `translateY(${
              verticalScroll + 534
            }px)`;
          }
        }
      } else if (event.key === "ArrowDown") {
        if (!seeMoreInfo) {
          navigateDown();
          if (verticalScroll === 0) {
            rowRef.current.style.transform = `translateY(${
              verticalScroll - 534
            }px)`;
          } else if (verticalScroll === maxScrollPosition) {
            rowRef.current.style.transform = `translateY(${maxScrollPosition}px)`;
          } else {
            rowRef.current.style.transform = `translateY(${
              verticalScroll - 534
            }px)`;
          }
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [heighlightedRow, verticalScroll, movieRows, seeMoreInfo]);

  return (
    <main>
      <ul className="rows" ref={rowRef}>
        {movieRows.map((list, i) => {
          if (i === heighlightedRow) {
            return (
              <li key={i} className="higelighted">
                <Row
                  movies={list}
                  heighlighted={true}
                  seeMoreInfo={seeMoreInfo}
                  setSeeMoreInfo={setSeeMoreInfo}
                />
                ;
              </li>
            );
          }

          return (
            <li key={i}>
              <Row
                movies={list}
                heighlighted={false}
                seeMoreInfo={seeMoreInfo}
                setSeeMoreInfo={setSeeMoreInfo}
              />
              ;
            </li>
          );
        })}
      </ul>
    </main>
  );
}
