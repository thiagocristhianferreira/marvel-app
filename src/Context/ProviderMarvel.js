import { useState } from 'react';
import ContextMarvel from './ContextMarvel';

function ProviderMarvel({ children }) {
  const [title, setTitle] = useState('');
  const [characters, setCharacters] = useState([]);

  return (
    <ContextMarvel.Provider
      value={
        {
          title, setTitle,
          characters, setCharacters,
        }
      }
    >
      {children}
    </ContextMarvel.Provider>
  );
}

export default ProviderMarvel;