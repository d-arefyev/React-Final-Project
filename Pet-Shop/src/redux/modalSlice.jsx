import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    title: null,
    content: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = null;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;


// const actions = modalSlice.actions;
// export const { openModal, closeModal } = actions;
// export default modalSlice.reducer;





// oldReducer -----------------------------------------

// function oldReducer(state = initialState, action) {
//   switch (action.type) {
//     case "OPEN_MODAL":
//       return {
//         ...state,
//         isOpen: true,
//         title: action.payload.title,
//         content: action.payload.content,
//       };
//     case "CLOSE_MODAL":
//       return {
//         ...state,
//         isOpen: false,
//         title: null,
//         content: null,
//       };
//     default:
//       return state;
//   }
// }