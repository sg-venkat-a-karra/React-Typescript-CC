import { PersonProps } from 'types/Person.type';

/**
 *
 */

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.fName} {props.name.lName} has a friend count of{' '}
      {props.friendCount}
    </div>
  );
};

export default Person;
