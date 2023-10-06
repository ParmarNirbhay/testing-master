const { createSlice } = require('@reduxjs/toolkit');

const birdSlice = createSlice({
    
    name: 'birdsNames',
    initialState: [],
    reducers: {
        add(state, action){
            state.push(action.payload);
        }
    }
})

export const { add } = birdSlice.actions;
export default birdSlice.reducer;