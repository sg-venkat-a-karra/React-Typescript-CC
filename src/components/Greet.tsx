import React from 'react';

/**
 *
 */
type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return <div>Wecome {props.name}! You have 10 unread messages.</div>;
};

export default Greet;
