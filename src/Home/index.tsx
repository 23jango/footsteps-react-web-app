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

      <Link to="/" className="nav-link">
        <img src="/pics/Group 8.png" alt="Home" className="home-header-img" />
      </Link>
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

    </div>
  );
}