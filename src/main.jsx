import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./path/HomePage.jsx";
// import "./index.css"
import Accept from "./path/Accept.jsx";
import ChoicePath from "./path/ChoicePath.jsx";
import No from "./path/No.jsx";
import Yes from "./path/Yes.jsx"
import Index from "./path/gifts/index.jsx";
import One from "./path/gifts/one.jsx"
import Two from "./path/gifts/two.jsx"
import Three from "./path/gifts/three.jsx"
import Four from "./path/gifts/four.jsx"
import Five from "./path/gifts/five.jsx"
import Six from "./path/gifts/six.jsx"
import Final from "./path/gifts/final.jsx";
import GiftsOutlet from "./path/gifts/giftOutlet.jsx";
import "./styles/main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "accept",
        element: <Accept />
      },
      {
        path: "choice",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ChoicePath />
          },
          {
            path: "no",
            element: <No />
          },
          {
            path: "yes",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Yes />
              },
              {
                path: "gifts",
                element: <GiftsOutlet />,
                children: [
                  {
                    index: true,
                    element: <Index />
                  },
                  {
                    path: "1",
                    element: <One />
                  },
                  {
                    path: "2",
                    element: <Two />
                  },
                  {
                    path: "3",
                    element: <Three />
                  },
                  {
                    path: "4",
                    element: <Four />
                  },
                  {
                    path: "5",
                    element: <Five />
                  },
                  {
                    path: "6",
                    element: <Six />
                  },
                  {
                    path: "final",
                    element: <Final />
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
], {
  basename: "/birthday-2"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
