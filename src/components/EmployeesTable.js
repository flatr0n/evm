import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import CustomInput from "./inputs/CustomInput";
import { arrEmps } from "../InitialData";

export default function EmployeeTable() {
  const [inp, setInp] = useState("");

  const inputParams = {
    post: [
      ["id", "Код сотрудника", { required: true, pattern: /^\d+$/ }],
      ["fullName", "ФИО", { required: true }],
    ],
    put: [
      ["id", "Код сотрудника", { required: true, pattern: /^\d+$/ }],
      ["fullName", "ФИО", { required: true }],
    ],
    delete: [["id", "Код сотрудника", { required: true, pattern: /^\d+$/ }]],
  };

  const mode = {
    post: ["Добавить", (data) => console.log(data)],
    put: ["Редактировать", (data) => console.log(data)],
    delete: ["Удалить", (data) => console.log(data)],
  };

  return (
    <Flex justifyContent={"space-between"}>
      <Box>
        <Menu>
          <MenuButton m="10px" as={Button}>
            Действия
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setInp("post")}>Создать</MenuItem>
            <MenuItem onClick={() => setInp("put")}>Изменить</MenuItem>
            <MenuItem onClick={() => setInp("delete")}>Удалить</MenuItem>
          </MenuList>
        </Menu>
        {inp === "post" ? (
          <CustomInput mode={mode.post} inputParams={inputParams.post} />
        ) : null}
        {inp === "put" ? (
          <CustomInput mode={mode.put} inputParams={inputParams.put} />
        ) : null}
        {inp === "delete" ? (
          <CustomInput mode={mode.delete} inputParams={inputParams.delete} />
        ) : null}
      </Box>
      <EmpTable arrEmps={arrEmps} />
    </Flex>
  );
}

function EmpTable(props) {
  return (
    <Box bg="#EDF5E1" color="black" borderRadius={7} m="10px">
      {!props.arrEmps ? null : (
        <TableContainer maxW="container.xl">
          <Table size="md" variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>ФИО</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.arrEmps?.map((el) => (
                <Tr>
                  <Td>{el["id"]}</Td>
                  <Td>{el["fullName"]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
