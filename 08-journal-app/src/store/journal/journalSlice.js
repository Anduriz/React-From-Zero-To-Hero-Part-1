import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    mesageSaved: '',
    notes: [],
    active: null
    
    // Active Structure
    // active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 1234567,
    //     imageUrls: [],
    // }
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        // Si no ocupas el action simplemente no lo especificas
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.mesageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;

            state.mesageSaved = '';

            // TODO: Mensaje de error...
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                
                if(note.id === action.payload.id){
                    return action.payload;
                }

                return note;
            });

            state.mesageSaved = `${ action.payload.title }, actualizada correctamente`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.mesageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.filter( note => note.id !== action.payload );
            state.active = null;
        }
    },
})

export const {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout
 } = journalSlice.actions;