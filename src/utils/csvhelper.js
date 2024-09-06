export const downloadCSV = (transactions) => {
    const csvRows = [];
    
    const headers = ['ID', 'Text', 'Amount'];
    csvRows.push(headers.join(','));
  
    transactions.forEach(transaction => {
      const row = [
        transaction.id,
        transaction.text,
        transaction.amount
      ];
      csvRows.push(row.join(','));
    });
  
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    a.click();
    URL.revokeObjectURL(url);
  };