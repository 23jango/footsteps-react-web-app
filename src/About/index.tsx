import { Link } from "react-router-dom"
import FsNav from "../FsNavigation"
export default function About() {

  return (
    <div id="fs-about">
      < FsNav />
      <div id="vital-announcement">
        <h3 >
          Applications for mentors and mentees still open until October 18th!
        </h3>
      </div>
      <div id="fs-header-about">
        <h1 id="fs-about-title">
          Meet the Team
        </h1>
      </div>
      <div id="fs-description">
        <h1 id="fs-mission-title">
          Our Mission:
        </h1>
        <p id="fs-mission-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>


    </div>

  )
}