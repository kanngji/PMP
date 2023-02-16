import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Navbottom from "./components/Navbottom";
import Crawl from "./components/Crawl";
function App() {
  return (
    <div className="App">
      <Nav />
      <Crawl />
      <Banner />
      <Main />
      <Navbottom />
    </div>
  );
}

export default App;
