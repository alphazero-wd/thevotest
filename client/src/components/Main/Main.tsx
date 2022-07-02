import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { CreatePost } from "./CreatePost/CreatePost";

export const Main: FC = () => {
  return (
    <Stack spacing="4">
      <CreatePost />
    </Stack>
  );
};
