/* Renders a UI component depending on the URL */
import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupsPage from "./Pages/NewMeetups";
import FavoritesPage from "./Pages/Favorites";
import MainNavigation from "./Components/Layouts/MainNavigation";

function App() {
  //localhost:3000/ <-local domain
  //my-page.com/ <- Real life domain

  /*

    To route to multiple pages you can use Routes with path name and 
    and elements with the corrosponding page you want to go to
    Wrap all this in routes tag which replaces switches

  */
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
