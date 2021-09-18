import { useState } from "react";
import "./event-tile.scss";
import LikeButton from "./like-button";
import DatePicker from "react-datepicker";

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
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="event-tile__container">
      {/* <div className="event-tile__title-container">
        <span className="event-tile__title">Spacestagram</span>
        <span className="event-tile__subtitle">
          Brought to you by NASA&apos;s image API
        </span>
      </div> */}
      <div className="event-tile__info">
        {mediaType === "video" ? (
          <iframe
            width="100%"
            height="480"
            src={imageUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Apod Video"
            aria-label="Embeded Youtube Video Player"
          />
        ) : (
          <img
            className="event-tile__image"
            src={imageUrl}
            alt="NASA Apod"
          ></img>
        )}

        <div className="event-tile__event-title">
          <span>{title}</span>
          <span className="event-tile__date">{date}</span>
        </div>
        <p className="event-tile__description-text">{explaination}</p>
        <div className="event-tile__like-container">
          <LikeButton liked={liked} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default EventTile;
