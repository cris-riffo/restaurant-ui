import React from "react";
import Catalog from "./Catalog";
import Menu from "./Shared/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <Menu />
      </header>
      <main>
        <Catalog />
      </main>
      <footer />
    </>
  );
}

export default App;
