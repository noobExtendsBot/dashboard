import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

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
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
