import { useState } from 'react';

function useTest() {
  const [test, setTest] = useState(false);

  this.changeTest = function () {
    if (test) {
      setTest(false);
    } else {
      setTest(true);
    }
  };
  return test;
}

export default useTest;
