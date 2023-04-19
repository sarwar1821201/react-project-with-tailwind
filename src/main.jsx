import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import JobList from "./component/JobList/JobList";
import Blog from "./component/Blog/Blog";
import Statistics from "./component/Statistics/Statistics";
import AppliedJob from "./AppliedJob";
import Root from "./component/Root";
import JobView from "./component/JobView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <JobList></JobList>,
        loader: () => fetch("/joblist.json"),
      },

      {
        path: "appliedjob",
        element: <AppliedJob></AppliedJob>,
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "details/:id",
        element: <JobView></JobView>,
        loader: ({ params }) => fetch("./jobdata.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
