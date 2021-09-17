//import ReactPlayer from "react-player";
import { Player } from "video-react";

export const MoviePlayer = () => {
  return (
    <Player style={{ width: "500px" }}>
      <source src="https://vimeo.com/487912697" />
    </Player>
  );
};
