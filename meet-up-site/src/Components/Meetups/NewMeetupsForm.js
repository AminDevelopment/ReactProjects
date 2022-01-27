import Card from "../Ui/Cards";
import css from "./NewMeetupsForm.module.css";
import { useRef } from "react";

function NewMeetups(props) {
  //Used to get the infromation contained in the form
  //One for each item
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const desInputRef = useRef();

  function submitHandler(e) {
    //stops automatic browser event when button is clicked
    e.preventDefault();
    console.log("Hello");

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDes = desInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDes,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={css.form} onSubmit={submitHandler}>
        <div className={css.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="des">Description</label>
          <textarea id="Des" required rows="5" ref={desInputRef}></textarea>
        </div>
        <div className={css.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetups;
