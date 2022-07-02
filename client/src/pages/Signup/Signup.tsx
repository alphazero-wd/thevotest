import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AuthInput } from "../../components";
import { BsEnvelope } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";

export const Signup: FC = () => {
  return (
    <Flex w="100%" position="relative" h="100vh">
      <Flex
        maxW="50%"
        bg="primary"
        p="32"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading fontSize="xxx-large" color="white">
          Join THEVOTEST in order to vote for everything.
        </Heading>
      </Flex>
      <Flex
        w="50%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar mb="5" size="xl" />
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

            <Text textAlign="center">
              Already have an account?{" "}
              <Link
                as={RouterLink}
                to="/login"
                textAlign="center"
                color="primary"
              >
                Login here
              </Link>
            </Text>
          </Stack>
        </FormControl>
      </Flex>
    </Flex>
  );
};
