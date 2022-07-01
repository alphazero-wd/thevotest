import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AuthInput } from "../components";
import { BsEnvelope } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";

const Login: FC = () => {
  return (
    <Flex w="100%" position="relative" h="100vh">
      <Flex
        maxW="50%"
        bg="primary"
        p="40"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading fontSize="xxx-large" color="white">
          Join thevotest in order to vote for everything.
        </Heading>
      </Flex>
      <Flex
        w="50%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar mb="5" src="https://bit.ly/broken-link" size="xl" />
        <FormControl width="60%">
          <Stack spacing={4}>
            <AuthInput
              Icon={AiOutlineUser}
              labelText="Enter your name"
              inputProps={{ name: "username", placeholder: "Enter your name" }}
            />
            <AuthInput
              Icon={BsEnvelope}
              labelText="Enter your email"
              helperText="We'll never share your email."
              inputProps={{ name: "email", placeholder: "johndoe@gmail.com" }}
            />
            <AuthInput
              Icon={BiLockAlt}
              labelText="Enter your password"
              helperText="Password must consist of more than 6 characters. A lowercase and uppercase character, a number and a special character."
              inputProps={{ name: "password", placeholder: "●●●●●●" }}
            />
            <Button
              type="submit"
              bg="primary"
              color="white"
              _hover={{
                bg: "transparent",
                border: "solid",
                borderColor: "primary",
                color: "primary",
              }}
            >
              Sign up
            </Button>
          </Stack>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
