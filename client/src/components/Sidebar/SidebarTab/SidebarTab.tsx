import { Flex, Icon, Text, LinkBox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  SidebarIcon: IconType;
  to: string;
}

export const SidebarTab: FC<Props> = ({ SidebarIcon, title, to }) => {
  return (
    <LinkBox display="block" bg="primary" px="5" py="2" color="white" _hover={{ bg: "red.400" }} as={Link} to={to}>
      <Flex alignItems="center">
        <Icon as={SidebarIcon} mr="8" size="24px" />
        <Text>{title}</Text>
      </Flex>
    </LinkBox>
  );
};
