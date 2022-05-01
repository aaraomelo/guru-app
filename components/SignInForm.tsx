import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react';
import CustomInput from './CustomInput';
import { postSignInForm, setSignInFormField, validateSignInForm } from '../store/user/actionCreators';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react'

export interface SignInProps { }

type Props = SignInProps & MapStateToPropsTypes & MapDispatchToPropsTypes;

const SignInForm = ({ getSignInForm, getErrorMessages, setSignInForm, validateSignInFormField, signin }: Props) => {
  const router = useRouter();
  const getters = getSignInForm();
  const setters = setSignInForm();
  const errorMessages = getErrorMessages();
  const blur = validateSignInFormField();
  const toast = useToast()
  const submit = () => signin()
    .then(() => {
      router.push('/users');
    })
    .catch((error) => {
      const { statusCode, message } = error.response.data;
      toast({
        title: `Código ${statusCode}`,
        description: `${message}`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    })

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
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
              login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

interface MapStateToPropsTypes {
  getSignInForm: () => SignInInterface;
  getErrorMessages: () => ValidationSignInInterface;
}

interface MapDispatchToPropsTypes {
  setSignInForm: () => SetterSignInInterface;
  validateSignInFormField: () => BlurSignInInterface;
  signin: () => Promise<any>;
}

function mapStateToProps(state: any) {
  return {
    getSignInForm: () => state.user.forms.signin,
    getErrorMessages: () => state.user.validations.signin,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSignInForm: () => ({
      email: (e: any) => dispatch(setSignInFormField({ field: 'email', value: e.target.value })),
      password: (e: any) => dispatch(setSignInFormField({ field: 'password', value: e.target.value })),
    }),
    validateSignInFormField: () => ({
      email: () => dispatch(validateSignInForm({ field: 'email' })),
      password: () => dispatch(validateSignInForm({ field: 'password' })),
    }),
    signin: () => dispatch(postSignInForm())
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (SignInForm);

