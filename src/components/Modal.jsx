function Modal() {
  function handleClose() {
    document.querySelector(".modal").style.display = "none";
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
