import { async } from "@firebase/util";
import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { login, logout, chekingCredentials } from "./authSlice"

export const  chekingAuthenticatoin = (email, password) => {
    return async(dispatch) => {
        dispatch( chekingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(chekingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
        // console.log(result);
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        // console.log(email, password);
        // console.log(resp);
        if( !ok ) return dispatch( logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWitchEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(chekingCredentials());
        const {ok, errorMessage} = await loginWithEmailPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();

        dispatch( clearNotesLogout() );

        dispatch(logout({}));
    }
}
