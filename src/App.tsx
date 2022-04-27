import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/search/*" element={<Search />}>
          <Route path="search/:searchId" />
        </Route>
        <Route path="/tv/*" element={<Tv />}>
          <Route path="tv/:tvId" />
        </Route>
        <Route path="/*" element={<Home />}>
          <Route path="movie/:movieId" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
