import {collection, deleteDoc, doc, setDoc} from 'firebase/firestore/lite';
import { FirebaseFirestore } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './journalSlice';

export const startNewNote = () => {
    return async(dispatch, getState ) =>{

        dispatch( savingNewNote );

        // Get UID from auth
        const {uid} = getState().auth;

        //uid
        const newNote ={        

            title: '',
            body: '',
            date: new Date().getTime(),
        }

        // Referencia al documento por medio de recursos que nos otorga firebase
        // Recuerda que al grabar en firebase debes habilitar las reglas para escribir en la base de datos.
        const newDoc = doc(collection(FirebaseFirestore, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        console.log({newDoc, setDocResp});

        // dispach
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

        // dispatch ( newNote )

        // dispatch ( activarNote )

        
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        // Get UID from auth
        const {uid} = getState().auth;

        // if( !uid ) throw new Error ('El UID del usuario no existe');

        const notes = await loadNotes(uid);

        dispatch( setNotes( notes ) );

    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch(setSaving());

        // Get UID from auth
        const {uid} = getState().auth;
        // Get active note
        const { active:note } = getState().journal;

        const noteToFireStore = {...note};
        
        // Eliminamos la propiedad para que no la reescriba
        delete noteToFireStore.id;

        // Hacemos la referencia al documento
        const docRef = doc( FirebaseFirestore, `${uid}/journal/notes/${note.id}` );

        // Escritura
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch(updateNote( note ));

    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch(setSaving());

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote(photosUrls) );

    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        // Hacemos la referencia al documento
        const docRef = doc( FirebaseFirestore, `${uid}/journal/notes/${note.id}` );
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );
    }
}