import ModalAdd from "./ModalAdd";
import { useState } from "react";
import Backdrop from "./Backdrop";

function TaskCreator(props) {
  const [ModalAddIsOpen, setModalAdd] = useState(false);

  function changeState() {
    setModalAdd(true);
  }

function endModal(){
    setModalAdd(false);
}
  return (
    <div className="card">
      <button className="btn" onClick={changeState}>
        {props.text}
      </button>

      {ModalAddIsOpen && 
        <ModalAdd
          name="What would you like to add?"
          cancel="Cancel"
          confirm="Add"

          onCancel={endModal}
          onConfirm={endModal}
        />
      }

      {ModalAddIsOpen && <Backdrop onClick={endModal} />}
    </div>
  );
}

export default TaskCreator;
