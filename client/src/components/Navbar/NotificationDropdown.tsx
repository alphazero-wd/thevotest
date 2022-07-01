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
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";
import { NavbarIconButton } from "./NavbarIconButton";
import { VscBell } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

export const NotificationDropdown: FC = () => {
  return (
    <Menu>
      <MenuButton>
        <NavbarIconButton label="Notifications" Icon={VscBell} />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Notifications" textTransform="uppercase" />
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
              <Text color="gray.600">Harry upvoted your post </Text>
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
              <Text color="gray.600">Harry upvoted your post </Text>
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
        {/* <MenuDivider /> */}
      </MenuList>
    </Menu>
  );
};
