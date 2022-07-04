import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  LinkBox,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import logo from "../../images/thevotest.png";
import { MessagesDropdown } from "./Dropdown/Messages/MessagesDropdown";
import { NotificationDropdown } from "./Dropdown/Notification/NotificationDropdown";
import { BsMoon, BsSun } from "react-icons/bs";
import { useAppSelector } from "../../features/hooks";
import { NavDropdown } from "./Dropdown/Nav/NavDropdown";

export const Navbar: FC = () => {
  const [search, setSearch] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const { access_token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", colorMode);
  }, [colorMode]);

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
      bg={colorMode === "light" ? "white" : "gray.800"}
    >
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
            <IconButton
              bg="transparent"
              color="gray.500"
              icon={<IoSettingsOutline size="24px" />}
              _hover={{ bg: "primary", color: "white" }}
              aria-label={"settings"}
            />
          </Tooltip>
        </Link>
        <NotificationDropdown />
        <MessagesDropdown />

        {/* dark theme toggle */}
        <IconButton
          bg="transparent"
          color="gray.500"
          icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
          onClick={toggleColorMode}
          _hover={{ bg: "primary", color: "white" }}
          aria-label={"settings"}
        />
      </ButtonGroup>

      {/* search box */}
      <Flex alignItems="center" maxW="30%" flexGrow="1" justifyContent="center">
        <InputGroup mr="4">
          <InputLeftElement
            color="gray.500"
            pointerEvents="none"
            children={<IoSearchOutline />}
          />
          <Input
            variant={search ? "outline" : "filled"}
            placeholder="Search for groups, friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            focusBorderColor="primary"
          />
        </InputGroup>
      </Flex>

      {/* user */}
      {!access_token ? (
        <ButtonGroup spacing="3">
          <LinkBox as={RouterLink} to="/signup">
            <Button
              size="sm"
              rounded="full"
              color="white"
              bg="primary"
              _hover={{ opacity: ".75" }}
            >
              Sign up
            </Button>
          </LinkBox>

          <LinkBox as={RouterLink} to="/login">
            <Button
              size="sm"
              rounded="full"
              border="solid"
              borderColor="primary"
              color="primary"
              _hover={{ bg: "primary", color: "white" }}
              bg="transparent"
            >
              Login
            </Button>
          </LinkBox>
        </ButtonGroup>
      ) : (
        <NavDropdown />
      )}
    </Flex>
  );
};
