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
