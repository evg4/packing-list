function ChangeView({ state, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        {state.view === "SHOWALL" ? "Hide packed" : "Show all"}
      </button>
    </>
  );
}

export default ChangeView;
