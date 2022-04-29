export const weatherInitialState: UserState = {
  forms: {
    signup: {
      name: '',
      email: '',
      password: '',
    },
    signin: {
      email: '',
      password: '',
    }
  },
  validations: {
    signup: {
      name: [],
      email: [],
      password: [],
    },
    signin: {
      email: [],
      password: [],
    }
  }
};
