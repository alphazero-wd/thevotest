import { Box, Menu, MenuButton, MenuList, MenuGroup, MenuDivider, MenuItem, Flex, Avatar, Text, IconButton, Link, Button, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { VscBell } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

export const NotificationDropdown: FC = () => {
  return (
    <Menu>
      <Tooltip label="Notifications" hasArrow>
        <MenuButton as={IconButton} icon={<VscBell size="24px" />} bg="white" color="gray.500" _hover={{ bg: "primary", color: "white" }}></MenuButton>
      </Tooltip>
      <MenuList>
        <MenuGroup title="Notifications" textTransform="uppercase" />
        <MenuDivider />

        <MenuItem minH="48px">
          <Flex justifyContent="space-between" alignItems="center">
            <Avatar boxSize="2rem" borderRadius="full" src="https://friendkit.cssninja.io/assets/img/avatars/david.jpg" mr="12px" />
            <Box>
              <Text color="gray.600">Harry upvoted your post </Text>
              <Text color="gray.500" fontSize="xs">
                30 seconds ago
              </Text>
            </Box>
            <IconButton bg="transparent" size="sm" ml="4" aria-label="Delete notification" icon={<IoCloseOutline size="20px" />} />
          </Flex>
        </MenuItem>
        <MenuDivider />
      </MenuList>
    </Menu>
  );
};
