import React, { useState } from 'react';

function Counter() 
{
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Vous avez cliqué {count} fois
      </button>
      <button onClick={() => count <= 0 ? setCount(0) : setCount(count - 1)}>Annuler</button>
    </div>
  );
};

export default Counter;
