import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./routes/Movie";
import Onboarding from "./routes/Onboarding";
import Search from "./routes/Search";
import Tv from "./routes/Tv";


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/search/*" element={<Search />}>
          <Route path="search/:searchId" />
        </Route>
        <Route path="/tv/*" element={<Tv />}>
          <Route path=":tvId" />
        </Route>
        <Route path="/movie/*" element={<Movie />}>
          <Route path=":movieId" />
        </Route>
        <Route path="/*" element={<Onboarding />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;