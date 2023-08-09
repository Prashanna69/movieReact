import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout ()
{
    return (
        <>
            <Grid templateColumns='5vw 95vw' gap={0}>
                <GridItem
                    as='aside'
                    // colSpan={{ base : 6, lg: 1 , xl:1}}
                    p={{base : '20px' , lg: '30px'}}
                    minH='auto'
                    display="flex"
                    placeContent="center"
                    placeItems="center"
                    bg="bisque"


                >
                 <Sidebar />
                </GridItem>
                <GridItem
                    as='main'
                    // colSpan={ { base: 6, lg: 4, xl: 3 } }
                    // p='10px'
                >
                    <Navbar />
                    <Outlet />
                </GridItem>

            </Grid>
        </>
    )
}