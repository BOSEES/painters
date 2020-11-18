import firebase from "firebase";
import firebaseApp from "./firebase"; //firebase config를 가져와서 나에게 맞는 리턴값을 갱신.

//Auth와 관련된 서비스를 관리하는 클레스
class AuthServiece {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthServiece;