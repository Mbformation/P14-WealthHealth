import Form from "../components/form/Form";
import Header from "../components/Header";
import Modal from "../components/Modal";

function CreateEmployee() {
  function addTestEmployees() {}
  return (
    <>
      <div className="create-employee-wrapper">
        <Header />
        <h1>Create Employee</h1>
        <Form />
      </div>
      <Modal />
    </>
  );
}

export default CreateEmployee;
