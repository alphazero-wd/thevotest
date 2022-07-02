import { Flex, Text, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
interface Props {
  SidebarIcon: IconType;
  title: string;
}
export const SidebarBio: FC<Props> = ({ SidebarIcon, title }) => {
  return (
    <Flex alignItems="center">
      <Icon color="primary" as={SidebarIcon} mr="8" size="24px" />
      <Text>{title}</Text>
    </Flex>
  );
};
