import MeetupsList from "../Components/Meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [loading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-first-project-b49bc-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <MeetupsList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

/*<h1>All Meetups</h1>
      <ul>
        {/* 
          
        }

        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>*/
