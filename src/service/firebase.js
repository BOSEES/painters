import firebase from "firebase";

// firebase 관련 sdk 컨픽 초기세팅
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
// Initialize Firebase
// 만든 컨픽을 내보내기 위해 변수명 설정 및 exporting
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;