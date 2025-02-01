import "./styles.css";
import FsNav from "../FsNavigation"
import { Link } from "react-router-dom";
export default function Home() {

  return (
    <div id="fs-home">
      < FsNav />
      <div id="vital-announcement">
        <h3 >
          Applications for mentors and mentees still open until October 18th!
        </h3>
      </div>
      {/* <div id="fs-header">
        <h1 id="fs-home-title">
          STEM MENTORS
        </h1>
        <h1 id="fs-home-title">
          FOR YOU :
        </h1>
        <h1 id="fs-home-title-chivo">
          Footsteps!
        </h1>
      </div> */}

      <div id="home-bg">
        <Link to="/" className="nav-link">
          <img src="/pics/Group 8 (1).png" alt="Home" className="home-header-img" />
        </Link>
      </div>
      <div id="parent-org">
        <p>
          Check out our parent organization, <a id="insp-link"
            href="https://www.inspirecuriosity.org/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspire Curiosity!
          </a>
        </p>

      </div>
      <div id="welcome-bg">
        <div id="fs-description">
          <h1 id="fs-mission-title">
            Welcome to Footsteps NEU!
          </h1>
          <p id="fs-mission-description">
            We are a Northeastern University Organization supported by Inspire Curiosity dedicated to mentoring, inspiring, and growing the interest for STEM careers for primary and secondary students. Join to be part of our mentors or our mentees! We want to make you feel at home, and we are so happy you are here with us! more info, dates, important updates,
          </p>
          <p id="fs-mission-description">
            With love, the footsteps team
          </p>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Sign up! </button>
        </div>

      </div>


    </div>
  );
}