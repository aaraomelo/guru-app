type UserState = {
  forms: {
    signup: UserInterface
  }
}

interface UserInterface {
  name: string,
  email: string,
  password: string,
  [key: string]: any
}