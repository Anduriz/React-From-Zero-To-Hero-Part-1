import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: true,
    mesageSaved: '',
    notes: [],
    // active: null
    active: {
        id: 'ABC123',
        title: '',
        body: '',
        date: 1234567,
        imageUrls: [],
    }
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (sate, action) => {

        },
        setSaving: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    },
})

export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
 } = journalSlice.actions;