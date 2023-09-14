import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeMode } from "./Context/ModeContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import "./App.sass";

function App() {
  return (
    <HashRouter>
      <ThemeMode>
        <div className="App">
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeMode>
    </HashRouter>
  );
}

export default App;
