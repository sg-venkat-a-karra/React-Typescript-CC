import './App.css';
import Greet from 'components/Greet';
import Person from 'components/Person';
import PersonList from 'components/PersonList';

const friends = [
  { fName: 'Akhil', lName: 'karra' },
  { fName: 'Sindhu', lName: 'karra' },
  { fName: 'Ravi', lName: 'karra' },
];

function App() {
  return (
    <div className='App'>
      <Greet name='Avinash' isLoggedIn={true} messageCount={10} />
      <Person name={{ fName: 'Venkat', lName: 'Karra' }} friendCount={20} />
      <PersonList friends={friends} />
    </div>
  );
}

export default App;
