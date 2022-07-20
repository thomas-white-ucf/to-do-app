import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ToDoBoardProvider } from "./context/ToDoBoardContext";
// import moduleName from 'module';

function App() {
  return (
    <ToDoBoardProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ToDoBoardProvider>
  );
}

export default App;
