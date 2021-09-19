import "./App.css";
import "./components/event-tile";
import { EventTile, IEventTileProps } from "./components/event-tile";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingSpinner from "./components/loading-spinner";

export const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const fiveDaysAgo = new Date(today);
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

  const [startDate, setStartDate] = useState<Date>(fiveDaysAgo);

  useEffect(() => {
    getApodData(fiveDaysAgo);
  }, []);

  const getApodData = (date: Date) => {
    const startDate = getFormattedDate(date);
    setLoading(true);

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=zUeHUtgPEYyhRZBf8fCa6w5htRYrZwoWlqFXPZV6&start_date=${startDate}`
      )
      .then((res) => {
        setData(res.data) as unknown as IEventTileProps;
        setStartDate(date);
        setLoading(false);
      });
  };

  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return year + "-" + month + "-" + day;
  };

  const eventTiles = data
    .map((object, index) => (
      <EventTile
        key={`eventTile-${index}`}
        title={object.title}
        date={object.date}
        explaination={object.explanation}
        imageUrl={object.url}
        mediaType={object.media_type}
      />
    ))
    .reverse();

  return (
    <div className="App">
      <div className="header-container">
        <span className="event-tile__title">Spacestagram</span>
        <span className="event-tile__subtitle">
          Brought to you by NASA&apos;s image API
        </span>
        <DatePicker
          selected={startDate}
          onChange={getApodData}
          name="startDate"
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
        />
      </div>
      <div className="event-tile-list">
        {loading ? <LoadingSpinner {...loading} /> : eventTiles}
      </div>
    </div>
  );
};

export default App;
