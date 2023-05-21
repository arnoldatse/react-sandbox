import "./home.css";
import profilePicture from "assets/pictures/profile.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-banner">
        <div className="desc">
          <h1>WELCOME TO MY REACT PROJECT SANDBOX</h1>
          <p className="p-desc">
            This Project have been created as an exemple to provide an React JS
            starter project for experimentals and experiences purpose.
          </p>
          <p>
            To further test this app, I invite you to access the fake
            authentication page for{" "}
            <Link className="link white inline-link" to="/auth">
              {" "}
              Logging In.
            </Link>
          </p>
          <p>
            You can find the source code of this project{" "}
            <a
              href="https://github.com/arnoldatse/react-sandbox"
              target="_blank"
              className="link white inline-link"
              rel="noreferrer"
            >
              {" "}
              here
            </a>
          </p>
        </div>
        <div className="illustration">
          <img
            className="illustration-picture"
            src={profilePicture}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
