import Header from "./Header";
import Home from "./Home";
import Modal from "./Modal";
import Footer from "./Footer";
import Timeout from "./Timeout";

const App = () => {
  return (
    <div className="container-fluid mt-3">
      <Header />
      <Timeout />
      <Home />
      <Footer />
      <Modal />
    </div>
  );
};

export default App;
