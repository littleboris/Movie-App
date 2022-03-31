import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
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
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>

          {/* Colum3 */}
          <div className="col3">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Email: movie.inc@email.com</li>
              <li>Tel: +123 456 789</li>
              <li>Help</li>
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
    </div>
  );
};

export default Footer;
