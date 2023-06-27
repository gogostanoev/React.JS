import { Header } from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { People } from "./Pages/People/People";
import { Planets } from "./Pages/Planets/Planets";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";
import { SingleCharacter } from "./Pages/SingleCharacter/SingleCharacter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="people" element={<People /> } />

          <Route path="people/:id" element={<SingleCharacter />} />

          <Route path="planets" element={<Planets />} />

          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
