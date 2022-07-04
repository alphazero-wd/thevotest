import { FC } from "react";
import { Alert, AlertIcon, AlertStatus } from "@chakra-ui/react";

interface Props {
  status: AlertStatus;
  message: string;
}

export const AuthAlert: FC<Props> = ({ status, message }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {message}
    </Alert>
  );
};
