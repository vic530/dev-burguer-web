import { UserProvider } from './UserContext';

const AppProvider = ({ children }) => {
  // eslint-disable-next-line prettier/prettier
  return <UserProvider>{children}</UserProvider>
};

export default AppProvider;
