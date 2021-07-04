import React from "react";
import LeftMenu from "../components/LeftMenu";
import Chat from "../components/Chat";
import "../styles/pages/Main.scss";

const Main = (props) => {
  return (
    <div className="main">
      <LeftMenu match={props.match} />
      <Chat />
    </div>
  );
};

export default Main;
