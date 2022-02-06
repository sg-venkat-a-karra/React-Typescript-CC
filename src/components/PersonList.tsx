import React from 'react';

/**
 *
 */
type PersonListProps = {
  friends: {
    fName: string;
    lName: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.friends.map((friend) => (
        <div>
          {friend.lName} {friend.fName}
        </div>
      ))}
    </div>
  );
};

export default PersonList;
