import {
  Avatar,
  Button,
  Heading,
  LinkBox,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export const GroupsList: FC = () => {
  return (
    <TableContainer whiteSpace="pre-wrap" overflowX="hidden">
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>
              <LinkBox as={Link} to="/group/1">
                <Stack direction="row" spacing="2" alignItems="center">
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    size="sm"
                  />
                  <Heading size="sm">React</Heading>
                </Stack>
              </LinkBox>
            </Td>
            <Td isNumeric>
              <Button
                size="sm"
                rounded="full"
                bg="primary"
                color="white"
                _hover={{ opacity: ".75" }}
              >
                Join
              </Button>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <LinkBox as={Link} to="/group/1">
                <Stack direction="row" spacing="2" alignItems="center">
                  <Avatar
                    src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg"
                    size="sm"
                  />
                  <Heading size="sm">NestJS</Heading>
                </Stack>
              </LinkBox>
            </Td>
            <Td isNumeric>
              <Button
                size="sm"
                rounded="full"
                bg="primary"
                color="white"
                _hover={{ opacity: ".75" }}
              >
                Join
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
