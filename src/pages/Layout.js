import { Box, Flex, Center, Container, Text } from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";

import CustomInput from "../components/inputs/CustomInput";
import Wrap from "../components/Wrap";
import CustomMenu from "../components/Menu";

export default function Layout() {
  return (
    <>
      <Box as="header" bg="#41B3A3" color="05386B ">
        <Container maxW="container.lg">
          <Flex as="nav" justifyContent="space-between" h="20" align="center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="Employees">Employees</NavLink>
            <NavLink to="Products">Products</NavLink>
            <NavLink to="Orders">Orders</NavLink>
            <NavLink to="Executions">Executions</NavLink>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.lg">
        <CustomMenu />
        <Box as="main" display="flex" justifyContent={"center"}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
