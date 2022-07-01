import { IconButton, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  label: string;
}
export const NavbarIconButton: FC<Props> = ({ Icon, label }) => {
  return (
    <Tooltip hasArrow label={label}>
      <IconButton
        bg="white"
        color="gray.500"
        icon={<Icon size="24px" />}
        _hover={{ bg: "primary", color: "white" }}
        aria-label={"settings"}
      ></IconButton>
    </Tooltip>
  );
};
