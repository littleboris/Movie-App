import React from "react";
import "./styles/Footer.css";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* Colum1 */}
          <div className="col1">
            <h4>Movie Inc</h4>
            <ul className="list-unstyled">
              <li>666-666-666</li>
              <li>Planet, Ooga</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* Colum2 */}
          <div className="col2">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li><BsIcons.BsInstagram /> Instagram</li>
              <li><BsIcons.BsTwitter /> Twitter</li>
              <li><BsIcons.BsFacebook /> Facebook</li>
            </ul>
          </div>

          {/* Colum3 */}
          <div className="col3">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li><MdIcons.MdEmail /> Email: movie.inc@email.com</li>
              <li><BsIcons.BsFillTelephoneFill /> Tel: +123 456 789</li>
              <li><MdIcons.MdHelp /> Help</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Movies Inc | All rights deserve |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
