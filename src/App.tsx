import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import { MODEL_CLOSE } from "./constants/repoConstants";
import Welcome from "./components/Welcome/Welcome";
import MyFavorites from "./components/MyFavorites/MyFavorites";

function App() {
  const [fav, setFave] = useState([]);
  const disPatch = useDispatch();
  let { show, repo } = useSelector((state: any) => state.showModal);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.table(show, repo);
    setIsOpen(show);
  }, [show, repo]);

  const onClose = () => {
    disPatch({
      type: MODEL_CLOSE,
    });
    setIsOpen(false);
  };

  const AddToFav = () => {
    const newArr: any = [...fav, repo];
    setFave((pre) => {
      localStorage.setItem("fav", JSON.stringify(newArr));
      return newArr;
    });

    onClose();
  };

  return (
    <div className="body">
      <div className="conatiner">
        <BrowserRouter>
          <Header />
          <main>
            <Route path="/" exact component={Welcome} />
            <Route path="/search" exact component={Home} />
            <Route path="/fav" exact component={MyFavorites} />
          </main>
        </BrowserRouter>

        <Modal
          repoName={repo?.full_name}
          open={isOpen}
          onClose={onClose}
          addToFav={AddToFav}
        />
      </div>
    </div>
  );
}

export default App;
