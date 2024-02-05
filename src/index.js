import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import roorReducer from "./Slice/YoutubeSlice";
const root = ReactDom.createRoot(document.getElementById("root"));
const Storage = configureStore({
  reducer:roorReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
})
root.render(
  <div>
    <Provider store={Storage}>
    <App></App>
    </Provider>
  </div>
)