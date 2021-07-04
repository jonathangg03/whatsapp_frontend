import React from "react";
import { BiMessageSquareDetail, BiSearch } from "react-icons/bi";
import Icon from "./Icon";
import "../styles/components/LeftMenu.scss";

const LeftMenu = () => {
  return (
    <div className="left">
      <div className="left-menu">
        <Icon className="left-menu__icon" />
        <BiMessageSquareDetail className="left-menu__message" />
      </div>
      <div className="left-search">
        <input type="text" placeholder="Busca un chat o inicia uno nuevo" />
        <BiSearch className="left-search__icon" />
      </div>
      <div className="left-chats">
        {[].map((element) => (
          <div className="left-chats__message">
            <p className="left-chats__message-name">Nombre Apellido</p>
            <p className="left-chats__message-content">Este es el mensaje</p>
            <p className="left-chats__message-date">Ayer</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftMenu;
