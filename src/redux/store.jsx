import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer";
import fileFolderReducer from "./FileFolderReducer";
const store = configureStore({
  reducer: { auth: authReducer, fileFolder: fileFolderReducer },
});

export default store;
