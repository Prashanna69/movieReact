import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
function App ()
{
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}/>
    )

  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
