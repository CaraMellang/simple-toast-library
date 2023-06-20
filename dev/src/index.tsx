import {createRoot} from "react-dom/client";
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import styled from "@emotion/styled";

const Test = styled.div``

const app = document.getElementById('app');

if (app) {
    const root = createRoot(app);
    root.render(<BrowserRouter><App /></BrowserRouter>);
}