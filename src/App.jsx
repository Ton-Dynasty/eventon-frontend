import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Protocol from "./components/Protocol";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    ),

  },
  {
    path: "/app",
    element: <Protocol />,
  },

],
{
  basename: "/eventon-frontend",
});

const App = () => {

  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.LIGHT }}
    >
      <div className="overflow-hidden bg-site bg-cover bg-no-repeat" >
        <Header />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </TonConnectUIProvider>
  );
};

export default App;
