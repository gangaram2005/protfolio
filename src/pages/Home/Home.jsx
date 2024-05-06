import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/finalcv.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          {/* window+. click garepaxi hi jastai aru icons aauxan */}
          <h2>Hi 👋 i am a </h2>
          <h1>
            {/* typewriter-effect library bata garako */}
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer",
                  "MERN Stack Developer",
                  "Python Django Developer",
                  "React Js Developer",
                  "Flutter Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/+9779824517498"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>

            <a
              className="btn btn-cv"
              href={Resume}
              download="Ganga Ram Jaisi.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
