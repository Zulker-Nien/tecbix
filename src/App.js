import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 2000);
  });
  return (
    <>
      {fetching ? (
        <Loader />
      ) : (
        <div className="mainContainer">
          <Navbar />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
