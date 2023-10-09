import { store } from "./store.js";
import styles from "./List.module.css";

function List({ state, onClick, onRemove }) {
  if (state.view === "SHOWALL") {
    return (
      <>
        <ul className={styles.ul}>
          {state.list.map((item) => {
            return (
              <li key={item.name}>
                <p>
                  <span
                    className={styles.tick}
                    id={item.name}
                    onClick={onClick}
                  >
                    {item.packed ? "✅" : "⬜"}
                  </span>
                  {item.name}
                  <span id={item.name} onClick={onRemove} className={styles.x}>
                    {" "}
                    x
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else if (state.view === "HIDEPACKED") {
    let unpackedItems = state.list.filter((item) => {
      return item.packed === false;
    });

    return (
      <ul className={styles.ul}>
        {unpackedItems.map((item) => {
          return (
            <li key={item.name}>
              <p>
                <span className={styles.tick} id={item.name} onClick={onClick}>
                  {item.packed ? "✅" : "⬜"}
                </span>
                {item.name}
                <span id={item.name} onClick={onRemove} className={styles.x}>
                  {" "}
                  x
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
