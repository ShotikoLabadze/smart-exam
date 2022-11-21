import CategoryList from "./components/CategoryList";

import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CategoryList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
