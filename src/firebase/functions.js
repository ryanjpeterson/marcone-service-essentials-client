const getImageURL = async (partNumber) => {
  let res = '';
  const onResolve = (url) => {
    res = url;
  };

  const onReject = (error) => {
    res = '';
  };

  const storageRef = storage.ref(`part-images/${partNumber}.png`);
  const downloadURL = await storageRef
    .getDownloadURL()
    .then(onResolve, onReject);

  return res;
};

const setPartsData = async () => {
  await partData.forEach(async (part) => {
    const imageURL = await getImageURL(part.partNumber);
    firestore.collection('parts').add({
      ...part,
      imageURL,
    });
  });
};

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
