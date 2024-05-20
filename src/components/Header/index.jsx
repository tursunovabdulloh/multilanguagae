import React, { useContext } from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { store } from "../../context/context";

export default function Header() {
  const { state, ChangeLang, ChangeMode } = useContext(store);
  console.log(state);
  return (
    <header className="header">
      <div className="container header-container">
        <Link className="logo" to={"/"}>
          <img src={Logo} alt="" className="logo-rasm" />
          Sofuna
        </Link>
        <nav className="nav">
          <ul className="nav-item">
            <li className="nav-link">
              <NavLink className="link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="link" to={"/about"}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="work">
          <select
            value={state.lang}
            className="select"
            onChange={(e) => {
              ChangeLang(e.target.value);
            }}
          >
            <option value="uz">UZB</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
          </select>
          <button className="header-btn" onClick={ChangeMode}>
            {state.darkmode ? "LightMode" : "DarkMode"}
          </button>
        </div>
      </div>
    </header>
  );
}
