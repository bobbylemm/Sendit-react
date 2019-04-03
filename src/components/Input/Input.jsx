import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../styledComponent/Input/Input';

const InputField = ({
  input,
  placeholder,
  type,
  name,
  id,
  meta: { error, touched }
}) => (
  <Fragment>
    <Input
      {...input}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
    />
    {touched && error && <span className="error-message">{error}</span>}
  </Fragment>
);
InputField.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object
};

export default InputField;
