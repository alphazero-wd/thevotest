import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  MenuItem,
  Flex,
  Avatar,
  Text,
  IconButton,
  Link,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FC } from "react";
import { BsEnvelope } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

export const MessagesDropdown: FC = () => {
  return (
    <Menu>
      <Tooltip label="Messages" hasArrow>
        <MenuButton
          data-testid="message-dropdown-btn"
          icon={<BsEnvelope size="20px" />}
          as={IconButton}
          bg="transparent"
          color="gray.500"
          _hover={{ bg: "primary", color: "white" }}
        ></MenuButton>
      </Tooltip>
      <MenuList>
        <MenuGroup title="Messages" textTransform="uppercase" />
        <MenuDivider />

        <MenuItem minH="48px">
          <Flex justifyContent="space-between" alignItems="center">
            <Avatar
              boxSize="2rem"
              borderRadius="full"
              src="https://friendkit.cssninja.io/assets/img/avatars/david.jpg"
              mr="12px"
            />
            <Box>
              <span>
                <Text color="gray.600" fontSize="xs">
                  Tom{" "}
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, dolor.
                </Text>
              </span>
              <Text color="gray.500" fontSize="xs">
                30 seconds ago
              </Text>
            </Box>
            <IconButton
              bg="transparent"
              size="sm"
              ml="4"
              aria-label="Delete notification"
              icon={<IoCloseOutline size="20px" />}
            />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
