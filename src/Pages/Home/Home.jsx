import Profile from "../../assets/pixelcut-export.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
export const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="Profile" className="home__img" />
      <div
        className="home__content"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      >
        <div className="home__data">
          <h1 className="home__title">
            <span>
              Greetings.
              <span style={{ display: "block", color: "rgb(216, 214, 214)" }}>
                I am Abdullah Al Ovi
              </span>
            </span>
          </h1>

          <p className="home__description">
            <p className="home__description">
              I&rsquo;m a fullstack developer with a passion for creating both
              engaging front-end experiences and robust backend systems. My
              expertise spans the entire web development process, from designing
              intuitive user interfaces to integrating backend technologies,
              ensuring seamless and dynamic digital solutions.
            </p>
          </p>
          <Link to="about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight></FaArrowRight>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
