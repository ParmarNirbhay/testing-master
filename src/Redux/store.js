import { configureStore } from "@reduxjs/toolkit";
import birdReducre from './birdSlice';

const store = configureStore({
    reducer: {
        birds : birdReducre
    }
})

export default store