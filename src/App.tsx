import "./App.css";
import { AboutProduct } from "./components/AboutProduct";
import { Carousel } from "./components/Carousel";
import { Navigation } from "./components/Navigation";
import { slides } from "./slides";

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
