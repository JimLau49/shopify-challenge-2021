import "./App.css";
import "./components/event-tile";
import { EventTile } from "./components/event-tile";
import moment from "moment";
export const App = () => {
  const start_date = moment()
    .subtract(30, "days")
    .calendar()
    .replaceAll("/", "-");
  console.log(start_date);
  return (
    <div className="App">
      <EventTile
        title="M16 Close Up"
        date="2021-09-09"
        explaination="A star cluster around 2 million years young surrounded by natal clouds of dust and glowing gas, M16 is also known as The Eagle Nebula. This beautifully detailed image of the region adopts the colorful Hubble palette and includes cosmic sculptures made famous in Hubble Space Telescope close-ups of the starforming complex. Described as elephant trunks or Pillars of Creation, dense, dusty columns rising near the center are light-years in length but are gravitationally contracting to form stars. Energetic radiation from the cluster stars erodes material near the tips, eventually exposing the embedded new stars. Extending from the ridge of bright emission left of center is another dusty starforming column known as the Fairy of Eagle Nebula. M16 lies about 7,000 light-years away, an easy target for binoculars or small telescopes in a nebula rich part of the sky toward the split constellation Serpens Cauda (the tail of the snake)."
        imageUrl="hi"
      />
    </div>
  );
};

export default App;
