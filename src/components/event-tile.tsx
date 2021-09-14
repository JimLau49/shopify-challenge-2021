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
  return (
    <div className="event-tile__container">
      <div className="event-tile__title-container">
        <span className="event-tile__title">Spacestagram</span>
        <span className="event-tile__subtitle">
          Brought to you by NASA's image API
        </span>
      </div>
      <div className="event-tile__info">
        <img className="event-tile__image" src={imageUrl} alt=""></img>

        <div className="event-tile__event-title">
          <span>{title}</span>
          <span className="event-tile__date">{date}</span>
        </div>
        <span className="event-tile__description-text">{explaination}</span>

        <div className="event-tile__like-container">
          <button className="event-tile__like">Like!</button>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
