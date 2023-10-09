import "./App.css";
import List from "./List";
import AddNew from "./AddNew";
import ChangeView from "./ChangeView";
import { addItem, togglePacked, removeItem } from "./listSlice";
import { hidePacked, showAll } from "./changeViewSlice";

function App({ state, dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let item = document.getElementById("addNew").value;
    if (
      state.list.some((itemObj) => {
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

  const handleRemove = (e) => {
    let item = e.target.id;
    dispatch(removeItem(item));
  };

  const handleChangeView = (e) => {
    if (state.view === "HIDEPACKED") {
      dispatch(showAll());
    } else if (state.view === "SHOWALL") {
      dispatch(hidePacked());
    }
  };

  return (
    <>
      <h1>Packing list</h1>
      <ChangeView state={state} onClick={handleChangeView} />
      <List onRemove={handleRemove} onClick={handleToggle} state={state} />
      <AddNew onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
}

export default App;
