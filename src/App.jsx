import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.Hoc";

// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import Events from "./pages/Events.page";
import Sports from "./pages/Sports.page";
import Activities from "./pages/Activities.page";
import Stream from "./pages/Stream.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
      <DefaultHOC path = "/events" exact component={Events} />
      <DefaultHOC path = "/sports" exact component={Sports} />
      <DefaultHOC path = "/activities" exact component={Activities} />
      <MovieHOC path="/stream" exact component={Stream} />
    </>
  );
}

export default App;