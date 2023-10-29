import { useEffect } from "react";
import "./styles.scss";
import MovieInfo from "./MovieInfo";

export default function Card({
  data,
  highlighted,
  seeMoreInfo,
  setSeeMoreInfo,
  setSeeInfo,
}) {
  // const [seeMoreInfo, setSeeMoreInfo] = useState(false);
  const image = "image";

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        setSeeMoreInfo(true);
        setSeeInfo(true);
      } else if (event.key === "Escape") {
        setSeeMoreInfo(false);
        setSeeInfo(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={image}>
      <img src={data.Poster} />
      {seeMoreInfo && highlighted && <MovieInfo data={data} />}
    </div>
  );
}
