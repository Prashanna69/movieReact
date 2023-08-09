import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
function App ()
{
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <RootLayout /> }>
        <Route path="/profile" element={<Profile />} />
        <Route index element={<Dashboard />} />
      </Route>
    )

  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
