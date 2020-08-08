let firebaseConfig = {
  apiKey: process.env.REACT_APP_F_API_KEY,
  authDomain: process.env.REACT_APP_F_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_F_DATABASES_URL,
  projectId: process.env.REACT_APP_F_PROJECT_ID,
  storageBucket: process.env.REACT_APP_F_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_F_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_F_APP_ID,
  measurementId: process.env.REACT_APP_F_MEASURE_MENT_ID
};

export {firebaseConfig}
