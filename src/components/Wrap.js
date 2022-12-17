import { Box } from "@chakra-ui/react";

export default function Wrap({ children }) {
  return (
    <Box bg="white" borderRadius={7}>
      {children}
    </Box>
  );
}
