import "./index.css";
import Bolt from "@mui/icons-material/Bolt";
import { Link } from "react-router-dom";
import image from "../../images/qrcode.png";

const Login = () => {
  return (
    <div className="login-body">
      <span>WhatsApp Web-UI</span>
      <div className="card">
        <div className="details">
          <span>To use WhatsApp-UI Clone on your computer:</span>
          <ol>
            <li>Open WhatApp on your phone</li>
            <li>Tap Menu or Settings and select Linked devices</li>
            <li>Point your phone on this screen to capture the code</li>
          </ol>
          <div className="button">
            <Link className="link" to="/home">
              Chat UI
            </Link>
          </div>
        </div>
        <div className="qrcode">
          <img src={image} alt="qrcode" />
        </div>
      </div>
      <div className="footer">
        <Bolt /> Designed by SSK <Bolt />
      </div>
    </div>
  );
};

export default Login;
