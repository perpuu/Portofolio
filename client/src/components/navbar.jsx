import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <>
      <div className="navbar bg-white" style={{ fontFamily: "Fantasy,cursive" }}>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl" >Webdeveloper</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/portofolio">Portofolio</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
