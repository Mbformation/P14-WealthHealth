import Form from "../components/Form";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";

function CreateEmployee() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Create Employee</h1>
      <Form />
      <Modal />
    </>
  );
}

export default CreateEmployee;
