import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react';
import CustomInput from './CustomInput';

type Props = {
  formTitle: string;
  buttonTitle: string;
  getters: UserInterface,
  setters: SetterUserInterface,
  blur: BlurUserInterface,
  errorMessages: ValidationUserInterface,
  submit: () => void
}

const UserForm = ({ formTitle, buttonTitle, getters, setters, blur, errorMessages, submit }: Props) => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>{formTitle}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <CustomInput
              id='name'
              type="text"
              label='Nome'
              value={getters.name}
              onChange={setters.name}
              placeholder="Jhon Doe"
              errorMessages={errorMessages.name}
              onBlur={blur.name}
              helperText="Digite um nome"
            />
            <CustomInput
              id='email'
              type="email"
              label='Email'
              value={getters.email}
              onChange={setters.email}
              onBlur={blur.email}
              placeholder="jhondoe@mail.com"
              errorMessages={errorMessages.email}
              helperText="Digite um e-mail"
              mt={6}
            />

            <CustomInput
              id='password'
              type="password"
              label='Senha'
              value={getters.password}
              onChange={setters.password}
              onBlur={blur.password}
              placeholder='******'
              errorMessages={errorMessages.password}
              helperText="Digite uma senha"
              mt={6}
            />
            <Button
              onClick={submit}
              variant="outline"
              width="full"
              mt={4}
            >
              {buttonTitle}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default UserForm;
