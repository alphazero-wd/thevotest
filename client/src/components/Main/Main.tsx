import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { CreatePost } from "./CreatePost/CreatePost";
import { Posts } from "./Posts/Posts";

export const Main: FC = () => {
  return (
    <Stack spacing="4">
      <CreatePost />
      <Posts />
    </Stack>
  );
};
