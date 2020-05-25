import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Catalog from "./Catalog";
import Menu from "./Shared/Menu";

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
