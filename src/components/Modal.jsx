function Modal() {
  function handleClose() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector("body").style.overflow = "unset";
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={handleClose}>
          &times;
        </button>
        <p>Employee Created !</p>
      </div>
    </div>
  );
}

export default Modal;
