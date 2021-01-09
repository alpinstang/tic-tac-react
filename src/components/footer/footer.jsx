import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        Check out my <a href="https://github.com/aplinstang">Github</a> for more
        cool projects.
      </div>
      <div>
        <a href="https://www.freepik.com/photos/background">
          Background photo created by freepik - www.freepik.com
        </a>
      </div>
      <div>
        <br />
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <img
            alt="Creative Commons License"
            style={{ borderWidth: "0" }}
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
