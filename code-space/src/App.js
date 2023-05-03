import asset from "./images/asset1.svg";
import arrow from "./images/arrow.svg";
import logo from "./images/logo.svg";
import smarklas from "./images/SmartKlas C2_Websit Header Logo 1.svg";
import facebook from "./images/facebook.svg";
import tiktok from "./images/tik_tok.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";

function App() {
  return (
    <>
      <div className="relative w-full bg-[url('images/hero.png')] bg-no-repeat bg-center bg-cover h-screen overflow-x-hidden">
        <div
          className="absolute sm:top-0 -top-12 sm:right-0 -right-12"
          id="asset"
        >
          <img src={asset} alt="shapes" />
        </div>
        <div
          className="absolute sm:bottom-12 left-0 bottom-32 sm:translate-x-0 -translate-x-8 sm:rotate-0 -rotate-12"
          id="arrow"
        >
          <img src={arrow} alt="shapes" className="sm:h-full h-24" />
        </div>
        <div className="flex justify-center w-full h-full">
          <nav className="absolute top-0 left-0 px-6 py-10 md:px-20 lg:px-24">
            <img src={logo} alt="logo" className="h-8" />
          </nav>
          <header className="text-center self-center w-full px-6 py-6 sm:px-16 sm:py-16 mt-2 lg:max-w-3xl xl:max-w-5xl">
            <h2 className="sm:mb-8 mb-4 text-3xl sm:text-4xl">
              Connect with <span className="purple">GenZ</span>-s in tech across{" "}
              <span className="purple">Africa</span>
            </h2>
            <p className="sm:mb-10 mb-5 text-sm sm:text-1xl">
              we are coming soon 🚧🚧
            </p>
            <button className=" z-10">Join The Community</button>
          </header>
        </div>
      </div>
      <div
        className="border-t w-10/12 sm:w-11/12 mx-auto my-4 mt-8 mb-12 sm:mb-20"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "#D1D1D2",
        }}
      ></div>
      <footer className="flex justify-center sm:justify-start flex-col m-10 text-center sm:text-left items-center sm:items-start sm:w-96">
        <p className="mb-4" id="at">
          © 2023 Code Space Africa.
        </p>
        <p className="mb-6">
          Code Space Africa is a registered non-profit organization dedicated to
          empowering and celebrating genz in technology across Africa
        </p>
        <img className="h-6 mb-10" src={smarklas} alt="logo" />
        <div className="flex justify-between w-9/12 mb-12">
          <img className="h-10" src={facebook} alt="facebook" />
          <img className="h-10" src={twitter} alt="twitter" />
          <img className="h-10" src={instagram} alt="instagram" />
          <img className="h-10" src={tiktok} alt="tiktok" />
        </div>
      </footer>
    </>
  );
}
export default App;
