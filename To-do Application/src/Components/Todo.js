import M from "minimatch";
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
/*
    props are important for making reusable components
*/
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    /*
        className -> class in css 
        className = some css name you gave
      */
    <div className="card">
      {/*
            to make dynamic names for titles simply call props (parameter of function)
            .whatever you need to call
        */}
      <h2>{props.text}</h2>
      <div className="actions">
        {/*
            onClick is a built in parameter of built in react modules, therefore it works
            without any assitance
          */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/*
        here in JS {} we write if modalisopen and the element Modal. Since Modal is always
        true, as soon as modalIsOpen is called we can have the <Modal /> return
        since in  JS if two elements between && are true, the second value is returned
      */}
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} cancel="Cancel" confirm="Confirm"/>}
      {/*
        onClick here is not a built in as Backdrop is not a built in module, therefore
        it does not have any built in functionality, instead we have to go to BackDrop
        and add this functionality in
      */}
      {modalIsOpen && <Backdrop onClick={closeModal} />}
    </div>
  );
}

export default Todo;
