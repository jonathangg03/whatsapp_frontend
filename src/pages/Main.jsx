import React from "react";
import LeftMenu from "../components/LeftMenu";
import Chat from "../components/Chat";
import "../styles/pages/Main.scss";

const Main = () => {
  return (
    <div className="main">
      <LeftMenu />
      <Chat />
    </div>
  );
};

export default Main;
