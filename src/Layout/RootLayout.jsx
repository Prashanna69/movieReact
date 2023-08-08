import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function RootLayout ()
{
    return (
        <>
        <Sidebar />
            <Outlet />
            <Navbar />
        </>
    )
}