import './App.css';
import Greet from 'components/Greet';
import Person from 'components/Person';
import PersonList from 'components/PersonList';
import Status from 'components/Status';
import Heading from 'components/Heading';
import Oscar from 'components/Oscar';
import Button from 'components/Button';
import Input from 'components/Input';
import Container from 'components/Container';
import LoggedIn from 'components/state/LoggedIn';

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
      <Input onChange={(e) => console.log(e.target.value)} value='abc' />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
    </div>
  );
}

export default App;
