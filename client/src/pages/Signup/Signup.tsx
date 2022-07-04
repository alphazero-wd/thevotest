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
import { FC, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AuthInput } from "../../components";
import { BsEnvelope } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { SignupDto } from "../../utils/types/auth";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { signup } from "../../features/reducers/auth";
import { useClearErrors } from "../../hooks/useClearErrors";

export const Signup: FC = () => {
  const [signupDto, setSignUpDto] = useState<SignupDto>({
    username: "",
    email: "",
    password: "",
  });
  const { errors } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSignUpDto({ ...signupDto, [e.target.name]: e.target.value });
  };

  useClearErrors();

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(signup(signupDto));
  };

  return (
    <Flex w="100%" h="100vh">
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
        <FormControl onSubmit={onSubmit} width="60%" isRequired>
          <Stack spacing={4}>
            <AuthInput
              errorMessages={errors.filter((error) =>
                error.includes("username")
              )}
              InputIcon={AiOutlineUser}
              labelText="Enter your name"
              inputProps={{
                name: "username",
                placeholder: "Enter your name",
                onChange,
                value: signupDto.username,
              }}
            />
            <AuthInput
              errorMessages={errors.filter((error) => error.includes("email"))}
              InputIcon={BsEnvelope}
              labelText="Enter your email"
              helperText="We'll never share your email."
              inputProps={{
                name: "email",
                placeholder: "johndoe@gmail.com",
                onChange,
                value: signupDto.email,
              }}
            />
            <AuthInput
              errorMessages={errors.filter((error) =>
                error.includes("password")
              )}
              InputIcon={BiLockAlt}
              labelText="Enter your password"
              helperText="Password must consist of more than 6 characters. A lowercase and uppercase character, a number and a special character."
              inputProps={{
                name: "password",
                placeholder: "●●●●●●",
                onChange,
                value: signupDto.password,
              }}
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
              onClick={onSubmit}
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
