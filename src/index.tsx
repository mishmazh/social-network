import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store/rootReducer";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(app);
