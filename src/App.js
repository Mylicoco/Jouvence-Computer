import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Carousel from "./Components/Carousel";
import Body from "./Components/Body";
import Footer from "./Components/footer";
import Cart from "./Components/cart";
import Modal from "./Components/Modal";
import { data } from "./Components/db";
import SendEmail from "./Components/sendEmail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Validate from "./Components/validate";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Carousel />
        <Routes>
          <Route
            exact
            path="/"
            Component={() => ( 
              <Body items={data}/>
            )}
          />
          <Route path="/cart" Component={() => <Cart />} />
          <Route path="/validate" Component={() => <Validate />} />
          <Route path="/sendemail" Component={() => <SendEmail />} />
        </Routes>
        <Footer />
        {/* <Cart/>
      <Modal /> */}
      </Router>
    </div>
  );
}
export default App;
