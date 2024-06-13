export const enValidation = {
  email: {
    presence: {
      message: '^Please enter your Email',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },
  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },
  name: {
    presence: {
      message: '^Please enter your full Name',
    },
  },
  confirmPassword: {
    presence: {
      message: '^Please enter  confirmPassword',
    },
    length: {
      minimum: 8,
      message: '^Your password must be at least 8 characters',
    },
  },
  cycleLength: {
    presence: {
      message: '^Please enter cycle days',
    },
  },
  periodLength: {
    presence: {
      message: '^Please enter periods days',
    },
  },
};
