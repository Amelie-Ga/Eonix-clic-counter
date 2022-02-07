import React, { useState } from 'react';
import Counter from './components/Counter';


function Home({
  onIncrement,
  counter,
}) {

  return (
    <div>
      <Counter/>
    </div>
  );
};

export default Home;
