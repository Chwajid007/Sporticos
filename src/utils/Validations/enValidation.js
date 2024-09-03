export const enValidation = {
  email: {
    presence: {
      message: '^Please enter your Email',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },
  firstName: {
    presence: {
      message: '^Please enter your First Name',
    },
  },
  lastName: {
    presence: {
      message: '^Please enter your Last Name',
    },
  },
  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 8,
      message: '^Your password must be at least 8 characters',
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
  dateOfBirth: {
    presence: {
      message: '^Please select your date of birth',
    },
  },
  phoneNumber: {
    presence: {
      message: '^Please enter your phone number',
    },
    format: {
      pattern: /^\+\d{1,3}\d{0,9}$/,
      message: '^Please enter your country code',
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
