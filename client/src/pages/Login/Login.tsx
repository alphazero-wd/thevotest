import {
  Flex,
  Heading,
  Avatar,
  FormControl,
  Stack,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { AuthInput } from "../../components";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { clearErrors, login } from "../../features/reducers/auth";
import { LoginDto } from "../../utils/types/auth";
import { useClearErrors } from "../../hooks/useClearErrors";

export const Login: FC = () => {
  const location = useLocation();
  const [loginDto, setLoginDto] = useState<LoginDto>({
    email: "",
    password: "",
  });
  const { errors } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginDto({ ...loginDto, [e.target.name]: e.target.value });
  };

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(login(loginDto));
  };

  useClearErrors();

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
          Login to your THEVOTEST account to keep voting.
        </Heading>
      </Flex>
      <Flex
        w="50%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar mb="5" size="xl" />
        <FormControl
          width="60%"
          isInvalid={errors.length > 0}
          isRequired
          onSubmit={onSubmit}
        >
          <Stack spacing={4}>
            <AuthInput
              errorMessages={errors.filter((e) => e.includes("email"))}
              InputIcon={BsEnvelope}
              labelText="Enter your email"
              inputProps={{
                name: "email",
                placeholder: "johndoe@gmail.com",
                onChange,
                value: loginDto.email,
              }}
            />
            <AuthInput
              errorMessages={errors.filter((e) => e.includes("password"))}
              InputIcon={BiLockAlt}
              labelText="Enter your password"
              inputProps={{
                name: "password",
                placeholder: "●●●●●●",
                onChange,
                value: loginDto.password,
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
              Login
            </Button>

            <Text textAlign="center">
              Don&apos;t have an account?{" "}
              <Link
                as={RouterLink}
                to="/signup"
                textAlign="center"
                color="primary"
              >
                Sign up here
              </Link>
            </Text>

            <Link
              as={RouterLink}
              to="/forgot-password"
              textAlign="center"
              color="primary"
            >
              Forgot Password?
            </Link>
          </Stack>
        </FormControl>
      </Flex>
    </Flex>
  );
};
