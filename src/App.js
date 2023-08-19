import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./Components/List";
import AllTask from "./Components/Routing/All/AllTask"; 
import Home from './Components/Routing/Home/Home'
import Shopping from "./Components/Routing/Shopping/Shopping";
import Study from "./Components/Routing/Study/Study";
import Travel from "./Components/Routing/Travel/Travel";
import Work from "./Components/Routing/Work/Work";
import AddTask from "./Components/Routing/AddTask/AddTask";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/all-tasks" element={<AllTask />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/study" element={<Study />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/work" element={<Work />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
