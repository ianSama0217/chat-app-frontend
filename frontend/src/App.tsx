import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "./router";

function App() {
  return (
    <BrowserRouter basename="/Chat">
      <Routes>
        {routers.map((router) => {
          return <Route path={router.path} element={router.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
