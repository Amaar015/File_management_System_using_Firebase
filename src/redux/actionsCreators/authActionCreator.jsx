import * as types from "../actions/authActions";
import fire from "../../APIs/firebase";

const loginUser = (payload) => {
  return {
    type: types.SIGN_IN,
    payload,
  };
};
const logoutUser = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const signInUser = (email, password, setSuccess) => (dispatch) => {
  console.log(email, password);

  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(
        loginUser({
          uid: user.user.uid,
          email: user.user.email,
          displayName: user.user.displayName,
        })
      );
      setSuccess(true);
    })
    .catch((erro) => {
      alert("Invalid email or Password");
      console.log(erro);
    });
};
export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      fire
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(() => {
          const currentUser = fire.auth().currentUser;
          console.log(currentUser);
          dispatch(
            loginUser({
              uid: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
            })
          );
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      if ((error.code = "auth/email-already-in-use")) {
        alert("Email already in use!");
      }
      if ((error.code = "auth/invalid-email")) {
        alert("Invalid email");
      }
      if ((error.code = "auth/weak-password")) {
        alert("weak password");
      }
    });
};

export const SignOutUser = () => (dispatch) => {
  fire
    .auth()
    .signOut()
    .then(() => {
      dispatch(logoutUser());
    });
};

export const CheckisLoggedIn = () => (dispatch) => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(
        loginUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    }
  });
};
