import React from 'react';
import Input from '../styledComponent/Input/Input';

const InputField = ({ input, placeholder, type, name, id }) => (
  <Input {...input} type={type} placeholder={placeholder} name={name} id={id} />
);

export default InputField;
