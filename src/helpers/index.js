import isEmail from 'validator/lib/isEmail';

export const validateRegistrationForm = values => {
  let errors = {};

  if (!values.email) {
    errors.email = ['The email is required.'];
  } else {
    if (!isEmail(values.email)) {
      errors.email = ['The email is invalid.'];
    }
  }

  if (!values.username) {
    errors.username = ['The username is required.'];
  } else {
    if (values.username.length > 15) {
      errors.name = ['The name must not be longer than 15 characters.'];
    }
  }

  if (!values.password) {
    errors.password = ['The password is required.'];
  } else {
    if (values.password.length < 5) {
      errors.password = ['The password must be greater than 5.'];
    }
  }

  return errors;
};

export const validateNewParcel = values => {
  const errors = {};
  if (!values.packageName || values.packageName.trim() === '') {
    errors.packageName = 'Enter a Parcel name';
  }
  if (!values.pickupLocation || values.pickupLocation.trim() === '') {
    errors.pickupLocation = 'Enter a Pickup location';
  }
  if (!values.dropOfflocation || values.dropOfflocation.trim() === '') {
    errors.dropOfflocation = 'Enter a Dropoff location';
  }
  if (!values.weight) {
    errors.weight = 'Enter a weight';
  }
  if (!values.quantity) {
    errors.quantity = 'Enter a quantity';
  }
  return errors;
};
