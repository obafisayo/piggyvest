import React from "react";
import './App.css';
import Router from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
}
export default App;
