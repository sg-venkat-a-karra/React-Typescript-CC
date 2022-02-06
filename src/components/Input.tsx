/**
 *
 */

import React from 'react';

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = (props: InputProps) => {
  return <input type='text' value={props.value} onChange={props.onChange} />;
};
// #endregion

export default Input;
