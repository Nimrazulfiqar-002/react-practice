//Create a useInput hook for managing input field value and onChange handler.

import { useState } from 'react';

const useInput = (initialValue) => {
  const [userData, setUserData] = useState(initialValue);

  const ChangeHandler = (e) => {
    const { name, value } = e.target; 
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return { userData, ChangeHandler };
};

export default useInput;