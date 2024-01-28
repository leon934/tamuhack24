import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Runways from "./runways.js";
import Home from "./Home.js";
import ErrorPage from './ErrorPage.js';
import MachineLearning from "./machineLearing.js";
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
    path: "/runways",
    element: <Runways />
  },
  {
    path: "/Bot",
    element: <MachineLearning />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
