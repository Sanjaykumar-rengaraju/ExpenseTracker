import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResetTracker = () => {
  const { resetTransactions } = useContext(GlobalContext);

  return (
    <button onClick={resetTransactions} className="btn btn-danger">
      Reset All Transactions
    </button>
  );
}

export default ResetTracker;