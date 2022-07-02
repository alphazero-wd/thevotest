import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  children: any;
}
export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <Box p="5" position="relative" top="20">
      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
};
