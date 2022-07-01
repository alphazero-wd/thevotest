import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  AvatarBadge,
  MenuGroup,
  Tooltip,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RiShutDownLine } from "react-icons/ri";

export const NavDropdown: FC = () => {
  return (
    <Menu>
      <Tooltip hasArrow label="Notifications">
        <MenuButton>
          <Avatar src="https://bit.ly/broken-link" size="sm">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        </MenuButton>
      </Tooltip>
      <MenuList>
        <MenuGroup title="John Doe">
          <MenuItem icon={<CgProfile size="18px" />}>
            <Link as={RouterLink} to="/user/profile">
              Profile
            </Link>
          </MenuItem>
          <MenuItem icon={<IoSettingsOutline size="18px" />}>
            <Link as={RouterLink} to="/user/settings">
              Settings
            </Link>
          </MenuItem>

          <MenuItem icon={<RiShutDownLine size="18px" />}>Log out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
