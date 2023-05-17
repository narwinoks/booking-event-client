import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage></HomePage>} path="/"></Route>
      <Route element={<ExplorePage></ExplorePage>} path="/explore"></Route>
    </Routes>
  );
}

export default App;
