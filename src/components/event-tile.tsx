import { useState } from "react";
import "./event-tile.scss";

export interface IEventTileProps {
  key: string;
  title: string;
  date: string;
  explaination: string;
  imageUrl: string;
}

export const EventTile = ({
  title,
  date,
  explaination,
  imageUrl,
}: IEventTileProps) => {
  const [liked, setLicked] = useState(false);

  const handleClick = () => {
    console.log("hi");
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
        <img className="event-tile__image" src={imageUrl} alt=""></img>

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
