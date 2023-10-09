import { createSlice } from "@reduxjs/toolkit";

const confObj = {
  name: "list",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    togglePacked: (state, action) => {
      state.forEach((item) => {
        if (item.name === action.payload) {
          if (item.packed === false) {
            item.packed = true;
          } else {
            item.packed = false;
          }
        }
      });
      return state;
    },
    removeItem: (state, action) => {
      return state.filter((item) => {
        return item.name !== action.payload;
      });
    },
  },
};

const listSlice = createSlice(confObj);
export const { addItem, togglePacked, removeItem } = listSlice.actions;
export default listSlice.reducer;

/*const initialList = [];

export function addItem(item) {
  return { 
    type: "items/addItem", 
    payload: { name: item, packed: false } 
};
}

export function togglePacked(item) {
  return {
    type: "items/togglePacked",
    payload: item,
  };
}

export function removeItem(item) {
  return { type: "items/removeItem", payload: item };
}

export const listReducer = (state = initialList, action) => {
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
    }
    case "items/removeItem": {
      return state.filter((item) => {
        return item.name !== action.payload;
      });
    }
    default: {
      return state;
    }
  }
};
*/
