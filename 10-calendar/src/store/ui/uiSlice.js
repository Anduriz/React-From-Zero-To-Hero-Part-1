
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModalL: ( state ) => {
            state.isDateModalOpen = false;
        }
    }
})

// Actions creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModalL } = uiSlice.actions;