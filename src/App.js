import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayOut from "./components/layout/RootLayOut";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
