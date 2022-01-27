import Card from "../Components/Ui/Cards";
import NewMeetupsForm from "../Components/Meetups/NewMeetupsForm";
import { useNavigate } from "react-router-dom";
import React from 'react';

function NewMeetupsPage() {
  const nav = useNavigate();
  function AddMeetUpHandler(meetupData) {
    //send https request to backend server to store the data of our form
    //fetch sends get requests with http arg only
    //firebase requires a post request (most apis do), use second arg
    fetch(
      "https://react-first-project-b49bc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        }
      }
    ).then(() => {
      nav("/", { replace: true });
    });
  }
  return (
    <div>
      <h1>Add New Meetups</h1>
      <NewMeetupsForm onAddMeetup={AddMeetUpHandler} />
    </div>
  );
}
export default NewMeetupsPage;
