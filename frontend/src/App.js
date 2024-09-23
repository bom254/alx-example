import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = {
        query: `
          {
            approvals(first: 5) {
              id
              owner
              approved
              tokenId
            }
            approvalForAlls(first: 5) {
              id
              owner
              operator
              approved
            }
          }
        `,
        operationName: "Subgraphs",
        variables: {}
      };

      try {
        const response = await fetch('https://api.studio.thegraph.com/query/89729/alx-example/version/latest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Provider Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;