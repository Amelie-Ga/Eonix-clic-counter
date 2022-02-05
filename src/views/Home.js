import React, { useState } from 'react';

function Home({
  onIncrement,
  counter,
}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button>
        Vous avez cliqué {count} fois
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count <= 0 ? setCount(0) : setCount(count - 1)}>-</button>
    </div>
  );
};

export default Home;
