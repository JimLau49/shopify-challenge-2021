import { useState } from "react";
import "./event-tile.scss";

export interface IEventTileProps {
  key: string;
  title: string;
  date: string;
  explaination: string;
  imageUrl: string;
  mediaType: "image" | "video";
}

export const EventTile = ({
  title,
  date,
  explaination,
  imageUrl,
  mediaType,
}: IEventTileProps) => {
  const [liked, setLicked] = useState(false);
  const handleClick = () => {
    setLicked(!liked);
  };

  return (
    <div className="event-tile__container">
      <div className="event-tile__title-container">
        <span className="event-tile__title">Spacestagram</span>
        <span className="event-tile__subtitle">
          Brought to you by NASA&apos;s image API
        </span>
      </div>
      <div className="event-tile__info">
        {mediaType === "video" ? (
          <iframe
            width="100%"
            height="480"
            src={imageUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        ) : (
          <img className="event-tile__image" src={imageUrl} alt=""></img>
        )}

        <div className="event-tile__event-title">
          <span>{title}</span>
          <span className="event-tile__date">{date}</span>
        </div>
        <p className="event-tile__description-text">{explaination}</p>
        <div className="event-tile__like-container">
          {liked ? (
            <button className="event-tile__liked" onClick={handleClick}>
              <span role="img" aria-label="sparkling heart">
                💖
              </span>
            </button>
          ) : (
            <button className="event-tile__like" onClick={handleClick}>
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTile;
