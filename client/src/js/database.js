import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const textDb = await openDB('jate', 1);

  const tx = textDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.put({ value: content });
  const result = await request;
  request.onsuccess = () => {
    textDb.getAllEntries();
  }
  request.onerror = (e) => {
    console.log('Error adding: '+ e)
  }
  console.log('🚀 - data saved to the database', result);

};

export const getDb = async () => {
  const textDb = await openDB('jate', 1);

  const tx = textDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  //change get to only get the latest item as a string
  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result[result.length - 1]?.value;
};

initdb();
