import { InputGroup, InputLeftElement, Input, InputProps, FormLabel, FormHelperText } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  inputProps: InputProps;
  Icon: IconType;
  labelText: string;
  helperText?: string;
}

export const AuthInput: FC<Props> = ({ Icon, inputProps, labelText, helperText }) => {
  return (
    <>
      <FormLabel htmlFor={inputProps.name}>{labelText}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<Icon color="gray.300" />} />
        <Input type={inputProps.type} placeholder={inputProps.placeholder} name={inputProps.name} value={inputProps.value} onChange={inputProps.onChange} focusBorderColor="primary" />
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};
