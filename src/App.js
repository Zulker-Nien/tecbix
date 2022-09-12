import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";

import { ToastContainer } from "react-toastify";

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setFetching(false);
  //   }, 2000);
  // });
  return (
    <>
      <div className="mainContainer">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
