import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { downloadCSV } from '../utils/csvhelper';

export const ExportCSV = () => {
  const { transactions } = useContext(GlobalContext);

  const handleDownload = () => {
    downloadCSV(transactions);
  };

  return (
    <button onClick={handleDownload} className="btn btn-csv">
      Download CSV
    </button>
  );
};