import { Flex, Heading, Avatar, FormControl, Stack, Button, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { BiLockAlt } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { AuthInput } from "../components";

export const Login: FC = () => {
  return (
    <Flex w="100%" position="relative" h="100vh">
      <Flex maxW="50%" bg="primary" p="40" flexDirection="column" justifyContent="center">
        <Heading fontSize="xxx-large" color="white">
          Login to your thevotest account to keep voting.
        </Heading>
      </Flex>
      <Flex w="50%" flexDir="column" justifyContent="center" alignItems="center">
        <Avatar mb="5" size="xl" />
        <FormControl width="60%">
          <Stack spacing={4}>
            <AuthInput Icon={BsEnvelope} labelText="Enter your email" inputProps={{ name: "email", placeholder: "johndoe@gmail.com" }} />
            <AuthInput Icon={BiLockAlt} labelText="Enter your password" inputProps={{ name: "password", placeholder: "●●●●●●" }} />

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
              Login
            </Button>

            <Text textAlign="center">
              Don&apos;t have an account?{" "}
              <Link as={RouterLink} to="/signup" textAlign="center" color="primary">
                Sign up here
              </Link>
            </Text>

            <Link as={RouterLink} to="/forgot-password" textAlign="center" color="primary">
              Forgot Password?
            </Link>
          </Stack>
        </FormControl>
      </Flex>
    </Flex>
  );
};
