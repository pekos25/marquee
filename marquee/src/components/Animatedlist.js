import React from "react";
import "./style.css";
import Rct from "../assets/images/React_logo.png";
import Btstrp from "../assets/images/bootstrap-logo.png";
import Fcbk from "../assets/images/Facebook.jpg";
import Gthb from "../assets/images/Github-logo.png";
import Ggl from "../assets/images/Google-Logo.jpg";
import Ndjs from "../assets/images/Nodejs.png";
import Marquee from "react-fast-marquee";

const Animatedlist = () => {
  return (
    <div className="omot">
      <Marquee
        className="prvi"
        speed={60}
        gradient={false}
        pauseOnHover={true}
        direction={"right"}
      >
        <img src={Rct} alt="react logo" />
        <img src={Btstrp} alt="bootstrap logo" />
        <img src={Fcbk} alt="facebook logo" />
        <img src={Gthb} alt="github logo" />
        <img src={Ggl} alt="google logo" />
        <img src={Ndjs} alt="nodejs logo" />
      </Marquee>

      <Marquee
        style={{ width: "80%", margin: "0 auto" }}
        className="drugi"
        speed={40}
        gradient={false}
        pauseOnHover={true}
        direction={"left"}
      >
        <img src={Rct} alt="react logo" />
        <img src={Btstrp} alt="bootstrap logo" />
        <img src={Fcbk} alt="facebook logo" />
        <img src={Gthb} alt="github logo" />
        <img src={Ggl} alt="google logo" />
        <img src={Ndjs} alt="nodejs logo" />
      </Marquee>
    </div>
  );
};

export default Animatedlist;
