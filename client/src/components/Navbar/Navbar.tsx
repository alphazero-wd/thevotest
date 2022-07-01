import {
  ButtonGroup,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../images/thevotest.png";
import { NavbarIconButton } from "./NavbarIconButton";
import { NavDropdown } from "./NavDropdown";
import { NotificationDropdown } from "./NotificationDropdown";

export const Navbar: FC = () => {
  const [search, setSearch] = useState("");
  return (
    <Flex
      px="8"
      py="2"
      position="fixed"
      w="full"
      zIndex="3"
      justifyContent="space-around"
      alignItems="center"
      shadow="sm"
      bg="white"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Image src={logo} w="192px" />
        <ButtonGroup ml="4">
          <Link as={RouterLink} to="/user/settings">
            <NavbarIconButton label="Settings" Icon={IoSettingsOutline} />
          </Link>

          {/* notifications */}
          <NotificationDropdown />

          {/* messages */}
          <NavbarIconButton label="Messages" Icon={BsEnvelope} />
        </ButtonGroup>
      </Flex>

      <Flex alignItems="center" maxW="30%" flexGrow="1" justifyContent="center">
        <InputGroup mr="4">
          <InputLeftElement
            color="gray.500"
            pointerEvents="none"
            children={<IoSearchOutline />}
          />
          <Input
            type="tel"
            variant={search ? "outline" : "filled"}
            placeholder="Search for groups, friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            focusBorderColor="primary"
          />
        </InputGroup>
      </Flex>
      <NavDropdown />
    </Flex>
  );
};
