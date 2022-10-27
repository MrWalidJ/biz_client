import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddCard from "./components/AddCard";
import EditCard from "./components/EditCard";
import { ToastContainer } from "react-toastify";
import AllCards from "./components/AllCards";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import HomeB from "./components/HomeB";
import MyCards from "./components/MyCards";
import AboutB from "./components/AboutB";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homein" element={<HomeB />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutin" element={<AboutB />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/signup"
            element={
              <Register
                Biz={false}
                text={"Create an account for free"}
                image={"./images/img2.jpg"}
              />
            }
          />
          <Route
            path="/business"
            element={
              <Register
                Biz={true}
                text={"Create Business account for free"}
                image={"./images/img1.png"}
              />
            }
          />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/edit-card/:id" element={<EditCard />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/allcards" element={<AllCards />} />
        </Routes>
      </Router>
      <footer className="text-center my-3 p-3">
        <small>© Walid Jamjoum - 2022</small>
      </footer>
    </div>
  );
}

export default App;
