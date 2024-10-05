import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.tsx";
import SiteHome from "./pages/SiteHome.tsx";
import WeatherIndex from "./pages/weather/WeatherApp.tsx";
import PageNotFound from "./pages/404.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<SiteHome />} />
          <Route path='login' element={<Login />} />
          <Route path='apps/weather' element={<WeatherIndex />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
