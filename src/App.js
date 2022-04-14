import "./App.css";
import { HomePage} from "./pages";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<HomePage/>} />
        <Route path="/signup" element={<HomePage/>}/>
        <Route path="/login" element={<HomePage/>}/>
        <Route path="/cart" element={<HomePage/>}/>
        <Route path="/wishlist" element={<HomePage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
