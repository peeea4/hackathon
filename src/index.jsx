import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./pages/App";
import { store } from "./store";
import { GlobalStyles } from "./styles";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </Provider>,
);
