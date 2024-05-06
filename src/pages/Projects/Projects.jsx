import React from "react";
import "./Projects.css";
import SellBUYBOOK from "../../img/online_book_sell_buy.png";
import KMC from "../../img/kmccollege.png";
import Ecommerce from "../../img/Ecommerce.png";
import API from "../../img/api.jpeg";
import Blood from "../../img/bloodbank.png";
const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top reCent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are my top projects with live links and source code Description
          about the whole projects Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In voluptates expedita deserunt dolores inventore
          totam, voluptatum soluta qui placeat reiciendis! Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet.
        </p>
        <div className="row" id="ads">
          {/* Card Design */}
          <div className="col-md-4 cus-margin">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img src={SellBUYBOOK} alt="Projects" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Online Book Sell and Buy</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/gangaram2005/book-sell-production.git"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* next project */}
          <div className="col-md-4 cus-margin">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={KMC} alt="Projects" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Django</span>
                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Student Management System</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://www.kmccollege.edu.np"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* next project */}
          <div className="col-md-4 cus-margin">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img src={Ecommerce} alt="Projects" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">ECommerce Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/gangaram2005/ecommerce_frontend.git"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* next project */}
          <div className="col-md-4 cus-margin">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Python</span>
                <img src={API} alt="Projects" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Django Rest Framework</span>
                <span className="card-detail-badge">SQLite3</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">College Apps Api</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/gangaram2005/School-project-Python-Rest-framework-API.git"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* next project */}
          <div className="col-md-4 cus-margin">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Python</span>
                <img src={Blood} alt="Projects" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Django</span>
                <span className="card-detail-badge">SQLite3</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Blood Bank Mgnt System</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/gangaram2005/blood-Bank-.git"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
