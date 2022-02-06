import React from 'react';

/**
 *
 */
type PersonProps = {
  name: {
    fName: string;
    lName: string;
  };
  friendCount: number;
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.fName} {props.name.lName} has a friend count of{' '}
      {props.friendCount}
    </div>
  );
};

export default Person;
