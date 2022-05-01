export const userInitialState: UserState = {
  auth: null,
  currentUser: {
    id: 0,
    name: '',
    email: '',
    password: ''
  },
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
