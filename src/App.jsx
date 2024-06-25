import Content from "./components/Content";
import DemoCss from "./components/DemoCss/DemoCss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Home />
      <Header />
      <div className="flex">
        <Navigation />
        <Content />
      </div>
      <Footer />
      <DemoCss />
    </>
  );
}

export default App;
