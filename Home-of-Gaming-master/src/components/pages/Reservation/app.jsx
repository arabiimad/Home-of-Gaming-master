import "./App.scss";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import Tarif from "./components/pages/tarif/tarif";
import Routes from "./Routes";

function App() {
  return (
    <>
      <NavBar />
      <Tarif />
    </>
  );
}

export default App;
