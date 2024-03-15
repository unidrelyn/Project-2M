import React from "react";
import { Link } from "react-router-dom";
import focusImage from "../assets/focus.png";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-div">
        <img className="logo-image" src={focusImage} alt="Focus" />
        <h2>LOGIN</h2>
        <form>
          <label>
            <input type="text" name="name" placeholder="NAME" />
          </label>
          <label>
            <input type="text" password="password" placeholder="PASSWORD" />
          </label>
          <div className="login-buttons-div">
            <button className="login-button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Welcome;
