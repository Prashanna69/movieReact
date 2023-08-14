import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <>
      <Grid>
        <GridItem as="nav" p="10px">
          <Navbar />
        </GridItem>
        <GridItem as="main" w="auto" bg="green.200">
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}
