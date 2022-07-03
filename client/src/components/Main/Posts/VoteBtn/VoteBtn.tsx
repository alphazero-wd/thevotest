import { IconButton, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  label: string;
}

export const VoteBtn: FC<Props> = ({ Icon, label }) => {
  return (
    <Tooltip hasArrow shouldWrapChildren placement="right" label={label}>
      <IconButton
        aria-label={label}
        as={Icon}
        color="primary"
        bg="transparent"
        p="2"
        _hover={{ bg: "primary", color: "white" }}
      />
    </Tooltip>
  );
};
