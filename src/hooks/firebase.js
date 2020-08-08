import { storage, database } from "../firebase";

const getCodeWithDate = () => {
  let date = new Date();
  let codeNow = date.getTime();
  return codeNow;
};

export const setStorage = async (file, pathName) => {
  let task = {};
  try {
    let codeDate = getCodeWithDate();
    let storageRef = storage.ref(pathName + codeDate);
    task.imageRef = await storageRef.put(file);
    task.success = true;
  } catch (error) {
    task.success = false;
    task.error = error.message;
  }
  return task;
};

export const removeStorage = async (urlFile) => {
  let task = {};
  try {
    let storageRef = storage.refFromURL(urlFile);
    await storageRef.delete();
    task.success = true;
  } catch (error) {
    if (error.code === "storage/object-not-found") {
      task.success = true;
    } else {
      task.success = false;
      task.error = error.message;
    }
  }
  return task;
};

export const getCountries = async () => {
  const countries = { data: [] };
  try {
    const countriesRef = database.collection("countries");
    countries.snapshot = await countriesRef.get();
    countries.snapshot.forEach((doc) => {
      countries.data.push({
        value: doc.id,
        text: doc.data().country,
      });
    });
  } catch (error) {
    countries.data = [];
  }
  return countries.data;
};

export const getLastPosition = async (collection, country) => {
  const position = { data: [] };
  try {
    let positionRef = database
      .collection("countries")
      .doc(country)
      .collection(collection);
    position.snapshot = await positionRef.get();
    position.snapshot.forEach((doc) => {
      if (doc.data().position) {
        position.data.push(doc.data().position);
      }
    });
    position.data.sort((unNumero, otroNumero) => otroNumero - unNumero);
    position.success = true;
  } catch (error) {
    position.success = false;
    position.error = error.message;
  }
  return position;
};
