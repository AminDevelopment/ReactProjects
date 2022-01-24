import Meetupitem from "./Meetupitem";
import css from "./MeetupList.module.css";

function MeetupsList(props) {
  return (
    <ul className={css.list}>
      {props.meetups.map((meetup) => (
        <Meetupitem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupsList;
