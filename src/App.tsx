import { Center } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <Center bg="gray.800">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Center>
  );
}

export default App;
