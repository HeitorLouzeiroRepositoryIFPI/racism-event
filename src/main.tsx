import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import App from "./App.tsx";
import { Navbar } from "./components/Navbar/index.tsx";
import { Footer } from "./components/Footer/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
