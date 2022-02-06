import { Friend } from 'types/Person.type';

/**
 *
 */
type PersonListProps = {
  friends: Friend[];
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
