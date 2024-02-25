import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./components/pages/userList/UserList";
import Home from "./components/pages/home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container mt-8 flex flex-col-reverse sm:flex-row">
        <div className="sticky top-0 sm:h-screen sm:flex-none w-full sm:w-1/5">
          <Sidebar />
        </div>
        <div className="flex-1">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
