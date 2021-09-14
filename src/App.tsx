import "./App.css";
import "./components/event-tile";
import { EventTile, IEventTileProps } from "./components/event-tile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import axios from "axios";
import { useEffect, useState } from "react";
export const App = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    toast("Loading!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  });

  useEffect(() => {
    const start_date = moment().subtract(30, "days").format("YYYY-MM-D");
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=zUeHUtgPEYyhRZBf8fCa6w5htRYrZwoWlqFXPZV6&start_date=${start_date}`
      )
      .then((res) => {
        if ((res.status = 200)) {
          setData(res.data) as unknown as IEventTileProps;
        }
      });
  }, []);

  var eventTiles = data.map((object, index) => (
    <EventTile
      key={`eventTile-${index}`}
      title={object.title}
      date={object.date}
      explaination={object.explanation}
      imageUrl={object.hdurl}
    />
  ));

  return (
    <div className="App">
      {eventTiles && eventTiles.length > 0 ? eventTiles : <ToastContainer />}
    </div>
  );
};

export default App;
