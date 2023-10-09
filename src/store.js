import { createStore } from "redux";

export function addItem(item) {
  return { type: "items/addItem", payload: { name: item, packed: false } };
}

export function togglePacked(item) {
  return {
    type: "items/togglePacked",
    payload: item,
  };
}

const initialState = [
  { name: "soap", packed: false },
  { name: "pants", packed: true },
];
const packReducer = (state = initialState, action) => {
  switch (action.type) {
    case "items/addItem": {
      return [...state, action.payload];
    }
    case "items/togglePacked": {
      state.map((item) => {
        if (item.name === action.payload) {
          if (item.packed === false) {
            item.packed = true;
          } else {
            item.packed = false;
          }
        }
      });
      return state;
      console.log(state);
      //[...state, { name: action.payload, packed: false ? true : false }];
      //code here
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(packReducer);
