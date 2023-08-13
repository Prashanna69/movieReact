import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Profile, {
  dataLoader,
  profileLoader,
  resolveProfileData,
} from "./pages/Profile";
import Dashboard, { movieLoader } from "./pages/Dashboard";
import Setting from "./pages/Setting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} loader={profileLoader}>
      <Route
        path="/profile"
        element={<Profile />}
        loader={resolveProfileData}
      />
      <Route path="/setting" element={<Setting />} />
      <Route index element={<Dashboard />} loader={movieLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
