import Product from './Product';
import { Alert } from './Alert';
import { BiBody } from 'react-icons/bi';

const App = () => {
  return (
    <>
      <BiBody />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <BiBody />
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <BiBody />
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <BiBody />
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App;
