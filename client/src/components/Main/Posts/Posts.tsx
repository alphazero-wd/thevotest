import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "./Post/Post";

export const Posts: FC = () => {
  return (
    <Stack spacing="4" py={3}>
      <Post />
    </Stack>
  );
};
