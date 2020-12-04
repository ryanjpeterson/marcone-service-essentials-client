import { useState, useEffect } from 'react';
import './App.css';

import { firestore } from './firebase/firebase.utils';

import PartsOverview from './components/parts-overview/parts-overview.component';

function App() {
  const [parts, setParts] = useState([]);

  const setPartsOnLoad = async () => {
    if (localStorage.getItem('parts')) {
      setParts(JSON.parse(localStorage.getItem('parts')));
    } else {
      let parts = [];
      await firestore
        .collection('parts')
        .get()
        .then((querySnapshot) =>
          querySnapshot.forEach((doc) => parts.push(doc.data()))
        )
        .catch((error) => console.log(error));

      setParts(parts);
      localStorage.setItem('parts', JSON.stringify(parts));
    }
  };

  useEffect(() => {
    console.log('render');
    setPartsOnLoad();
  }, []);

  return (
    <div className="App">
      <PartsOverview parts={parts} />
    </div>
  );
}

export default App;
