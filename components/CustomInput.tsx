import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react"

type Props = {
  id: string;
  type: string;
  label: string;
  value: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  helperText?: string;
  errorMessages?: Array<string>;
  mt?: number
}

const CustomInput = ({ id, type, label, value, onChange, placeholder, helperText, errorMessages, mt }: Props) => {
  const isError = errorMessages?.length != 0;
  return (
    <FormControl mt={mt} isInvalid={isError}>
      <FormLabel
        htmlFor={id}
        color={isError ? 'red.500' : 'black'}
      >
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        errorBorderColor='red.500'
        focusBorderColor={isError ? 'red.500' : 'primary.500'}
      />
      {!isError ? (<FormHelperText>{value.length === 0 && helperText}</FormHelperText>) :
        (<FormErrorMessage>{errorMessages && errorMessages[0]}</FormErrorMessage>)}
    </FormControl>
  )
}

export default CustomInput;
