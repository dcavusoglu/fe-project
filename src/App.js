import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Feed from "./Pages/Feed";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/feed' element={<Feed/>}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
