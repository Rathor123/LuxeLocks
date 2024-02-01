import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import ProductDetailPage from "./components/ProductDetailPage";
import Footer from "./components/Footer";
import { MyContext } from "./context/MyContext";
import reducer from "./reducer/reducer";
function App() {
  const [searchedProdeuct, setsearchedProdeuct] = useState("");
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <MyContext.Provider value={{ state: state, dispatch: dispatch }}>
        <BrowserRouter>
          <Navbar
            searchedProdeuct={searchedProdeuct}
            setsearchedProdeuct={setsearchedProdeuct}
          />
          <Routes>
            <Route
              path="/"
              element={<Home searchedProdeuct={searchedProdeuct} />}
            />
            <Route path="ProductDetailPage" element={<ProductDetailPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
