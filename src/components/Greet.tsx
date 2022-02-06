import React from 'react';

/**
 *
 */
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 10 } = props;
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
        : `Welcome Team`}
    </h2>
  );
};

export default Greet;
