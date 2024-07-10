import Form from "../components/form/Form";
import Header from "../components/Header";
import Modal from "../components/Modal";

// Page d'accueil, avec un formulaire de création d'un employé
function CreateEmployee() {
  return (
    <>
      <div className="create-employee-wrapper">
        <Header />
        <h1>HRnet</h1>
        <Form />
      </div>
      <Modal />
    </>
  );
}

export default CreateEmployee;
