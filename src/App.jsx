import Navbar from "./components/Navbar";
import CreateAccount from "./components/CreateAccount"
import InformationProfile from "./components/InformationProfile";
import Footer from "./components/Footer";
import SellProducts from "./components/SellProducts";

function App() {

  return (
    <section>
      <Navbar />
      <h1 className="text-5xl underline text-center text-red-500">
        Hello world! <span className="text-darkGreen font-fontTitleBold">PRUEBA</span>
      </h1>
      <div>
        <h1 className="h1">Big Title</h1>
        <h2 className="h2">Medium Title</h2>
        <h3 className="h3">Subtitle</h3>
        <h4 className="h4">Highlights</h4>
        <p1 className="p1">Big text</p1>
        <p2 className="p2">Medium text</p2>
        <p3 className="p3">Small text</p3>
      </div>
      <button className="green-button h3">¡Regístrate!</button>
      <br />

      {/* <CreateAccount />
      <InformationProfile />
      <SellProducts /> */}

      <Footer />
    </section>
  );
}

export default App;
