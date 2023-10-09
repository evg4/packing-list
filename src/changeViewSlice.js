import { createSlice } from "@reduxjs/toolkit";

const configObj = {
  name: "view",
  initialState: "SHOWALL",
  reducers: {
    hidePacked: () => {
      return "HIDEPACKED";
    },
    showAll: () => {
      return "SHOWALL";
    },
  },
};

const viewSlice = createSlice(configObj);
export const { hidePacked, showAll } = viewSlice.actions;
export default viewSlice.reducer;

/*
const initialView = "SHOWALL";

export function hidePacked() {
  return { type: "view/hidePacked", payload: "HIDEPACKED" };
}

export function showAll() {
  return { type: "view/showAll", payload: "SHOWALL" };
}

export const viewReducer = (state = initialView, action) => {
  switch (action.type) {
    case "view/hidePacked": {
      return "HIDEPACKED";
    }
    case "view/showAll": {
      return "SHOWALL";
    }
    default: {
      return state;
    }
  }
};
*/
