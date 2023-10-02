import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
  contactInfo: {
    open: false,
    type: "CONTACT", // it can be CONTACT or STARRED or SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openContactInfo(state:any, action:any) {
      state.contactInfo.open = !state.contactInfo.open;
    },
    updatedContactInfo(state:any, action:any) {
      state.contactInfo.type = action.payload.type;
    },
    // closeContactInfo(state) {
    //     state.contactInfo.open = false;
    // },
  },
});

export default slice.reducer;

export function toggleDialog() {
  return async () => {
    dispatch(slice.actions.openContactInfo());
  };
}

export function updatedDialogType(type:any) {
  return async () => {
    dispatch(slice.actions.updatedContactInfo({type,}));
  };
}
