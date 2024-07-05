import Form from "../components/Form";
import Header from "../components/Header";
import Modal from "../components/Modal";

function CreateEmployee() {
  return (
    <div className="create-employee-wrapper">
      <Header />
      <h1>Create Employee</h1>
      <Form />
      <Modal />
    </div>
  );
}

export default CreateEmployee;
