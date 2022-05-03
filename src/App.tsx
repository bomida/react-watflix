import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./routes/Movie";
import Onboarding from "./routes/Onboarding";
import Play from "./routes/Play";
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
        <Route path="/play/*" element={<Play />} />
        <Route path="/tv/*" element={<Tv />}>
          <Route path="tv/:tvId" />
        </Route>
        <Route path="/movie/*" element={<Movie />}>
          <Route path="movie/:movieId" />
        </Route>
        <Route path="/react-watflix" element={<Onboarding />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
