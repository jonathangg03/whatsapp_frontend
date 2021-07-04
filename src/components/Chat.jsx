import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import "../styles/components/Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__menu">
        <p>Jonathan García</p>
        <FaEllipsisV className="chat__menu-icon" />
      </div>
      <div className="chat__main">
        {[
          "Recibido",
          "Enviado",
          "Recibido",
          "Recibido",
          "Enviado",
          "Enviado",
          "Recibido",
          "Enviado",
          "Recibido",
          "Recibido",
          "Enviado",
          "Enviado",
          "Recibido",
          "Enviado",
          "Recibido",
          "Recibido",
          "Enviado",
          "Enviado",
        ].map((ms) => {
          const sender = ms;
          return (
            <div className={`message ${sender}`}>
              <p>
                {ms} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat laboriosam aliquam quis, omnis dolorum fugit quibusdam,
                at ab quidem alias ex eum impedit? Animi inventore eius eos
                alias sint quam. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam maxime et eligendi, accusantium iure
                nisi nostrum placeat, error sint autem voluptatum. Nobis
                perspiciatis reiciendis minus repudiandae excepturi corporis
                numquam laudantium.
              </p>
            </div>
          );
        })}
      </div>
      <div className="chat__actions">
        <form action="" className="chat__actions-form">
          <input type="text" placeholder="Escribe un mensaje aquí" />
          <button type="submit">
            <AiOutlineSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
