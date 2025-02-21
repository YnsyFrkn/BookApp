import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastContainer theme="light" />
    <App />
  </Provider>
);
