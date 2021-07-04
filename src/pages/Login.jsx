import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as usersActions from "../actions/usersActions";
import Icon from "../components/Icon";
import "../styles/pages/Login.scss";

const Login = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__content-container">
          <Icon />
          <p>WHATSAPP WEB</p>
        </div>
      </header>
      <div className="login-main">
        <div className="login-main__content-container">
          <h1>Para usar whatsapp en tu computadora:</h1>
          <p>Selecciona el usuario con quien quieras ingresar:</p>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <Link to={`/main/${user._id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(Login);
