import { createContext, useState } from 'react';

export type AuthCustomer = {
  name: string;
  email: string;
};

type CustomerProps = {
  children: React.ReactNode;
};

type CustomerContextType = {
  customer: AuthCustomer | null;
  setCustomer: React.Dispatch<React.SetStateAction<AuthCustomer | null>>;
};

export const CustomerContext = createContext({} as CustomerContextType);

const CustomerProvider = ({ children }: CustomerProps) => {
  const [customer, setCustomer] = useState<AuthCustomer | null>(null);

  const providerValue = {
    customer,
    setCustomer,
  };
  return (
    <CustomerContext.Provider value={providerValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
