import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wedding: null,
    };

const weddingSlice = createSlice({
    name: 'wedding',
    initialState,
    reducers: {
        setWedding: (state, action) => {
            state.wedding = action.payload;
        },
    },
});

export const { setWedding } = weddingSlice.actions;
export default weddingSlice.reducer;

