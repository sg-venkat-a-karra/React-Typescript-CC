import './App.css';
import Greet from 'components/Greet';
import Person from 'components/Person';
import PersonList from 'components/PersonList';
import Status from 'components/Status';
import Heading from 'components/Heading';
import Oscar from 'components/Oscar';
import Button from 'components/Button';

const friends = [
  { fName: 'Akhil', lName: 'karra' },
  { fName: 'Sindhu', lName: 'karra' },
  { fName: 'Ravi', lName: 'karra' },
];

function App() {
  return (
    <div className='App'>
      <Oscar>
        <Heading>This is the Typescript tutorial</Heading>
      </Oscar>
      <Status status='complete' />
      <Greet name='Avinash' isLoggedIn={true} />
      <Person name={{ fName: 'Venkat', lName: 'Karra' }} friendCount={20} />
      <PersonList friends={friends} />
      <Button
        handleClick={(e, id) => {
          console.log(`Button clicked and event is: ${e} and id is ${id}`);
        }}>
        Button
      </Button>
    </div>
  );
}

export default App;
