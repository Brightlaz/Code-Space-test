import "./App.css";
import asset from "./images/asset1.svg";
import arrow from "./images/arrow.svg";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="relative w-full bg-[url('images/hero.png')] bg-no-repeat bg-center bg-cover h-screen overflow-x-hidden">
      <div className="absolute sm:top-0 -top-12 sm:right-0 -right-12">
        <img src={asset} alt="logo" />
      </div>
      <div className="absolute sm:bottom-12 left-0 bottom-32 sm:translate-x-0 -translate-x-8 sm:rotate-0 -rotate-12">
        <img src={arrow} alt="logo" className="sm:h-full h-24" />
      </div>
      <div className="w-full h-full">
        <nav className="px-8 py-10 md:px-20 lg:px-24">
          <img src={logo} alt="logo" className="h-8" />
        </nav>
      </div>
    </div>
  );
}
export default App;
