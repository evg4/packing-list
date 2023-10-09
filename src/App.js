import "./App.css";
import List from "./List";
import AddNew from "./AddNew";
import { addItem, togglePacked } from "./store";

function App({ state, dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let item = document.getElementById("addNew").value;
    if (
      state.some((itemObj) => {
        return itemObj.name === item;
      })
    ) {
      alert("You already have this item on your list.");
      document.getElementById("addNew").value = "";
    } else {
      dispatch(addItem(item));
      document.getElementById("addNew").value = "";
    }
  };

  const handleChange = (e) => {
    let item = e.target.value;
  };

  const handleToggle = (e) => {
    let item = e.target.id;
    dispatch(togglePacked(item));
  };

  return (
    <>
      <h1>Packing list</h1>
      <List onClick={handleToggle} state={state} />
      <AddNew onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
}

export default App;
