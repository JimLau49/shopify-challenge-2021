import React, { useState } from "react";
import "./event-tile.scss";

export interface EventTileProps {
  title: String;
  date: String;
  explaination: String;
  imageUrl: String;
}

export const EventTile = ({
  title,
  date,
  explaination,
  imageUrl,
}: EventTileProps) => {
  return (
    <div className="tile-container">
      <div className="tile-title-container">
        <span className="tile-title">Spacestagram</span>
        <span className="tile-subtitle">
          Brought to you by NASA's image API
        </span>
      </div>
      <div className="tile-info">
        <img
          className="tile-image"
          src="https://apod.nasa.gov/apod/image/2109/M16SHO_1024.jpg"
        ></img>

        <div className="tile-description-title">
          <span>{title}</span>
          <span className="tile-description-date">{date}</span>
        </div>
        <span className="tile-description">{explaination}</span>

        <div className="like-button-container">
          <button className="like-button">Like!</button>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
