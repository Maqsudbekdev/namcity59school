import "./App.css";
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Rahbariyat from "./pages/rahbariyat/Rahbariyat";
import Err404 from "./pages/Err404/Err404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/rahbariyat" element={<Rahbariyat />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
