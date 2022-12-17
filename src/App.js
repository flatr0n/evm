import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import EmployeesTable from "./components/EmployeesTable";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#E27D60 " h="100vh">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={null} />
          <Route path="Employees" element={<EmployeesTable />} />
          <Route path="Products" element={<EmployeesTable />} />
          <Route path="Orders" element={<EmployeesTable />} />
          <Route path="Executions" element={<EmployeesTable />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
