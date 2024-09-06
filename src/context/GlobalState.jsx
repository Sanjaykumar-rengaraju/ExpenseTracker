import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function resetTransactions() {
    dispatch({
      type: 'RESET_TRANSACTIONS'
    });
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      resetTransactions
    }}>
      {children}
    </GlobalContext.Provider>
  );
}