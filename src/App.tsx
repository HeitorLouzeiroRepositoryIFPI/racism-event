import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./templates/HomePage";
import { AboutPage } from "./templates/AboutPage";
import { ContactPage } from "./templates/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
