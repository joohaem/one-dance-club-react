import React from "react";
import imgIns from "../images/instagram_logo.png";

export default () => (
  <footer className="footer">
    <a className="ist_link" href="https://instagram.com/joamjoam_2/" target="_blank">
        <img src={imgIns} className="footer_logo" alt="인스타그램" />
        @joamjoam_2
      </a>
      <a className="ist_link" href="https://www.instagram.com/ps_noback/" target="_blank">
        <img src={imgIns} className="footer_logo" alt="인스타그램" />
        @ps_noback
      </a>  
  </footer>
);