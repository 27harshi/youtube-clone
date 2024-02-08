import React from "react";
import Body from "./components/Body";
import Watchpage from "./components/Watchpage";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/Maincontainer";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <Watchpage/>
      }
    ]
  }
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;