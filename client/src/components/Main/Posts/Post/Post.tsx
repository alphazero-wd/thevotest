import {
  ButtonGroup,
  Text,
  Heading,
  HStack,
  Icon,
  LinkBox,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Content } from "./Content/Content";
import { FC } from "react";
import { FaChevronUp, FaChevronDown, FaShareAlt } from "react-icons/fa";
import { VoteBtn } from "../VoteBtn/VoteBtn";
import { Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";

export const Post: FC = () => {
  return (
    <HStack
      border="solid"
      rounded="md"
      shadow="md"
      borderWidth="thin"
      p="5"
      borderColor="gray.500"
      _hover={{ borderColor: "primary" }}
    >
      <Stack mr="3" spacing="4" alignItems="center">
        <VoteBtn label="Upvote" Icon={FaChevronUp} />
        <Heading size="lg">2</Heading>
        <VoteBtn label="Downvote" Icon={FaChevronDown} />
      </Stack>
      <Stack>
        <LinkBox as={Link} w="full" h="full" to="/posts/3">
          <Stack bg="transparent">
            <Heading size="lg">How to Hello world in Python</Heading>
            <Content source={`\`\`\`py\nprint("Hello World")\n\`\`\``} />
          </Stack>
        </LinkBox>

        {/* comment, share, save */}
        <ButtonGroup>
          <Button
            size="sm"
            leftIcon={<Icon as={BiCommentDetail} fontSize="md" />}
            _hover={{
              color: "white",
              bg: "primary",
            }}
          >
            <LinkBox as={Link} to="/posts/3">
              <Text size="sm">5 Comments</Text>
            </LinkBox>
          </Button>

          <Button
            size="sm"
            leftIcon={<Icon as={FaShareAlt} fontSize="md" />}
            _hover={{
              color: "white",
              bg: "primary",
            }}
          >
            <Text size="sm">Share</Text>
          </Button>
        </ButtonGroup>
      </Stack>
    </HStack>
  );
};
