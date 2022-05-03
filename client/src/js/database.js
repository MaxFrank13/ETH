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

  const getEditor = store.get('content');

  getEditor.onsuccess = () => {
    const data = getEditor.result;

    data.notified = 'yes';

    const updateEditor = objectStore.put(content);

    console.log("The transaction that originated this request is " + updateEditor.transaction);

    updateEditor.onsuccess = () => {
      displayData();
    }
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const textDb = await openDB('jate', 1);

  const tx = textDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
