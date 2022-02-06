import './App.css';
import Greet from 'components/Greet';
import Person from 'components/Person';
import PersonList from 'components/PersonList';
import Status from 'components/Status';
import Heading from 'components/Heading';
import Oscar from 'components/Oscar';

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
    </div>
  );
}

export default App;
