import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
  FormLabel,
  FormHelperText,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { formatError } from "../../../utils/functions/format";

interface Props {
  inputProps: InputProps;
  InputIcon: IconType;
  labelText: string;
  helperText?: string;
  errorMessages: string[];
}

export const AuthInput: FC<Props> = ({
  InputIcon,
  inputProps,
  labelText,
  helperText,
  errorMessages,
}) => {
  return (
    <>
      <FormLabel htmlFor={inputProps.name}>{labelText}</FormLabel>
      <InputGroup>
        <InputLeftElement
          children={
            <Icon
              as={InputIcon}
              color={errorMessages.length > 0 ? "primary" : "gray.300"}
            />
          }
        />
        <Input
          isInvalid={errorMessages.length > 0}
          type={inputProps.type}
          placeholder={inputProps.placeholder}
          name={inputProps.name}
          value={inputProps.value}
          onChange={inputProps.onChange}
          focusBorderColor="primary"
          _invalid={{
            borderColor: "primary",
          }}
        />
      </InputGroup>
      {errorMessages.length > 0
        ? errorMessages.map((e, i) => (
            <Text fontSize="sm" lineHeight="1" color="primary" key={i}>
              {formatError(e)}
            </Text>
          ))
        : helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};
