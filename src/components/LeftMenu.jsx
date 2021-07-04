import React, { useEffect, useState } from "react";
import { BiMessageSquareDetail, BiSearch } from "react-icons/bi";
import Icon from "./Icon";
import axios from "axios";
import "../styles/components/LeftMenu.scss";

const LeftMenu = (props) => {
  const [chats, setChats] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:3000/chat");
    setChats(response.data.body);
  }, []);
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
        {chats.map((chat) => {
          return chat.users.map((user) => {
            if (user._id.toString() === props.match.params.id) {
              return (
                <div className="left-chats__message" key={user._id}>
                  <p className="left-chats__message-name">{user.name}</p>
                  <p className="left-chats__message-content">
                    Este es el mensaje
                  </p>
                  <p className="left-chats__message-date">Ayer</p>
                </div>
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default LeftMenu;
