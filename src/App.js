import "./App.css";
import { HomePage} from "./pages";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<HomePage/>} />
        <Route path="/Signup" element={<HomePage/>}/>
        <Route path="/Login" element={<HomePage/>}/>
        <Route path="/Cart" element={<HomePage/>}/>
        <Route path="/Wishlist" element={<HomePage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
