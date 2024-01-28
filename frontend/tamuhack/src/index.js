import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import Runways from "./runways.js";
import Home from "./Home.js";
import Machinelearning from "./machinelearning.js";
import ErrorPage from './ErrorPage.js';
import {
  createBrowserRouter,
  Router,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/openrunways",
    element: <Runways />
  },
  {
    path: "/AI",
    element: <Machinelearning />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
