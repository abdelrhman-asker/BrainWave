import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainEn } from "./components/En/MainEn";
import MainAr from "./components/Ar/MainAr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainEn />} />
          <Route path="*" element={<MainEn />} />
          <Route path="/Ar" element={<MainAr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
