import { useContext } from 'react';
import { CustomerContext } from './CustomerContext';
/**
 *
 */
const Customer = () => {
  const { customer, setCustomer } = useContext(CustomerContext);
  const handleLogIn = () => {
    setCustomer({ name: 'Avinash', email: 'avioffice92@gmail.com' });
  };
  const handleLogOut = () => {
    setCustomer(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>
        Customer name is {customer?.name} and email is {customer?.email}
      </div>{' '}
    </div>
  );
};

export default Customer;
