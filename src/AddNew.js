function AddNew(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        id="addNew"
        name="addNew"
        type="text"
        placeholder="Add new item to pack"
        required
        onChange={props.onChange}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default AddNew;
