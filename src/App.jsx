import React from "react";
import './App.css';
import Router from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ScrollProvider } from "./ScrollContext";

function App() {
    return (
        <ScrollProvider>
            <ScrollToTop />
            <Router />
        </ScrollProvider>
    );
}
export default App;
