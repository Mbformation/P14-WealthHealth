function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const isRemembered = e.target.rememberme.checked;
  }
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <button className="submit-btn" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default Form;
