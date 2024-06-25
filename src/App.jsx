import Content from "./components/Content";
import DemoCss from "./components/DemoCss/DemoCss";
import DemoUseState from "./components/DemoUseState/DemoUseState";
import DemoOnclick from "./components/Events/DemoOnclick";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      {/* <h2 className="title">Tôi nằm ở Component App</h2>
      <Home />
      <Header />
      <div className="flex">
        <Navigation />
        <Content />
      </div>
      <Footer />
      <DemoCss />
      <DemoOnclick /> */}
      <DemoUseState />
    </>
  );
}

export default App;
