export const userInitialState: UserState = {
  requests: {
    postSignIn: {
      pending: false,
      failed: false,
      suceeded: false,
    },
  },
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
  },
  isValid: {
    signin: false,
    signup: false
  }
};
