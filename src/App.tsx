import "./App.css";
import { AboutProduct } from "./components/AboutProduct";
import { Carousel } from "./components/Carousel";
import { slides } from "./slides";
import { Navigation } from "./components/Navigation";

const App = () => {
  return (
    <main>
      <Navigation />
      <Carousel slides={slides} />
      <AboutProduct />
    </main>
  );
}

export default App;
