type UserState = {
  requests: {
    postSignIn: RequestInterface
  },
  forms: {
    signup: UserInterface,
    signin: SignInInterface
  },
  validations: {
    signup: ValidationUserInterface
    signin: ValidationSignInInterface
  }
}

interface UserInterface {
  name: string,
  email: string,
  password: string,
  [key: string]: any
}

interface ValidationUserInterface {
  name: Array<string>,
  email: Array<string>,
  password: Array<string>,
  [key: string]: any
}

interface SetterUserInterface {
  name: (e: any) => void;
  email: (e: any) => void;
  password: (e: any) => void;
  [key: string]: any
}

interface BlurUserInterface {
  name: () => void;
  email: () => void;
  password: () => void;
  [key: string]: any
}

interface SignInInterface {
  email: string,
  password: string,
  [key: string]: any
}

interface ValidationSignInInterface {
  email: Array<string>,
  password: Array<string>,
  [key: string]: any
}

interface SetterSignInInterface {
  email: (e: any) => void;
  password: (e: any) => void;
  [key: string]: any
}

interface BlurSignInInterface {
  email: () => void;
  password: () => void;
  [key: string]: any
}
