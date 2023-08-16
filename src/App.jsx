import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Profile, { profileLoader } from "./pages/Profile";
import Dashboard, { movieLoader } from "./pages/Dashboard";
import Setting from "./pages/Setting";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} loader={profileLoader}>
        <Route path="/profile" element={<Profile />} loader={profileLoader} />
        <Route path="/setting" element={<Setting />} />
        <Route index element={<Dashboard />} loader={movieLoader} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
