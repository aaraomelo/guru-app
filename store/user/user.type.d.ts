type UserState = {
  forms: {
    signup: UserInterface
  },
  validations: {
    signup: ValidationUserInterface
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
