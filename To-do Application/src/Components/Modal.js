function Modal(props) {
  function cancelHandler() {
      props.onCancel();
  }
  function confirmHandler() {
      props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        {props.cancel}
      </button>
      <button className="btn" onClick={confirmHandler}>
        {props.confirm}
      </button>
    </div>
  );
}

export default Modal;
