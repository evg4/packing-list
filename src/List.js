import { store } from "./store.js";
import styles from "./List.module.css";

function List({ state, onClick, onRemove }) {
  return (
    <>
      <ul className={styles.ul}>
        {state.map((item) => {
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
    </>
  );
}

export default List;
