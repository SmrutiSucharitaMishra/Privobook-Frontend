/* eslint-disable no-unused-vars */
import "./App.css";
import React, { Fragment, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./components/contexts/Notes/notesState";
import Alert from "./components/Alert";
function App() {
  const [alert, setAlert] = useState(null);
  const showALert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div className="App">
      <Router>
        <NoteState showALert={showALert}>
          <Fragment>
            <Navbar />
            <Alert alert={alert} />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route
                  exact
                  path="/login"
                  element={<Login showALert={showALert} />}
                ></Route>
                <Route
                  exact
                  path="/signup"
                  element={<Signup showALert={showALert} />}
                ></Route>
              </Routes>
            </div>
          </Fragment>
        </NoteState>
      </Router>
    </div>
  );
}

export default App;
