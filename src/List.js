import { store } from "./store.js";

function List({ state, onClick }) {
  return (
    <>
      <ul>
        {state.map((item) => {
          return (
            <li key={item.name}>
              <p>
                <span id={item.name} onClick={onClick}>
                  {item.packed ? "✅" : "⬜"}
                </span>
                {item.name}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
