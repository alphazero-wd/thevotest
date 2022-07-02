import { ButtonGroup, Flex, IconButton, Image, Input, InputGroup, InputLeftElement, LinkBox, Tooltip } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import logo from "../../images/thevotest.png";
import { MessagesDropdown } from "./Dropdown/Messages/MessagesDropdown";
import { NavDropdown } from "./Dropdown/Nav/NavDropdown";
import { NotificationDropdown } from "./Dropdown/Notification/NotificationDropdown";

export const Navbar: FC = () => {
  const [search, setSearch] = useState("");
  return (
    <Flex px="8" py="2" position="fixed" w="full" zIndex="3" justifyContent="space-around" alignItems="center" shadow="sm" bg="white">
      {/* logo */}
      <Flex alignItems="center" justifyContent="space-between">
        <LinkBox as={RouterLink} to="/">
          <Image src={logo} w="192px" />
        </LinkBox>
      </Flex>

      {/* icons */}
      <ButtonGroup ml="4">
        <Link as={RouterLink} to="/user/settings">
          <Tooltip hasArrow label="Settings">
            <IconButton bg="white" color="gray.500" icon={<IoSettingsOutline size="24px" />} _hover={{ bg: "primary", color: "white" }} aria-label={"settings"} />
          </Tooltip>
        </Link>
        <NotificationDropdown />
        <MessagesDropdown />
      </ButtonGroup>

      {/* search box */}
      <Flex alignItems="center" maxW="30%" flexGrow="1" justifyContent="center">
        <InputGroup mr="4">
          <InputLeftElement color="gray.500" pointerEvents="none" children={<IoSearchOutline />} />
          <Input variant={search ? "outline" : "filled"} placeholder="Search for groups, friends..." value={search} onChange={(e) => setSearch(e.target.value)} focusBorderColor="primary" />
        </InputGroup>
      </Flex>

      {/* user */}
      <NavDropdown />
    </Flex>
  );
};
