import { useState, useEffect } from 'react';
import './App.css';

import { firestore } from './firebase/firebase.utils';

import PartsOverview from './components/parts-overview/parts-overview.component';

function App() {
  const [parts, setParts] = useState([
    {
      partNumber: '3',
      description: 'b54v444',
    },
    {
      partNumber: '2',
      description: 'b54v444',
    },
    {
      partNumber: '1',
      description: 'b54v444',
    },
  ]);

  useEffect(() => {
    console.log('App.js render');
    fetchData();
  }, []);

  const fetchData = async () => {
    let parts = [];
    await firestore
      .collection('test')
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => parts.push(doc.data()))
      )
      .catch((err) => console.log(err));

    setParts(parts);
  };

  return (
    <div className="App">
      <PartsOverview parts={parts} />
    </div>
  );
}

export default App;
