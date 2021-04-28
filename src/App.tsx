import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="body">
      <div className="conatiner">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
