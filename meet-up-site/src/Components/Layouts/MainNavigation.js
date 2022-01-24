import { Link } from "react-router-dom";
/* import the css file (named [js_file_name.module.css] and use a variable
    name, ex. css, simply call css.[name-from-file] for each element) */
import css from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={css.header}>
      <div className={css.logo}>React Meetups</div>
      {/* 
           - ul -> unordered list, li -> entry in said list 
           - <a href="Some_link" > Title </a> -> put a link to site into the website
           - Link -> renders an anchor tag at the end but internally
            react-router-dom attaches a click listener to the Link and 
            will instead parse the url you want to go to and change it in
            the url bar and go there. Instead of sending the appropriate request
            so we dont have to load onto another html site
        */}
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
