import { createSlice } from "@reduxjs/toolkit";

const progressSlice =createSlice({
    name:'progress',
    initialState:{watchedVideos:[]},
    reducers:{
        setWatchedVideos(state ,action){
            state.watchedVideos = action.payload
            console.log(state.watchedVideos)
        }
    }
})
export const {setWatchedVideos} = progressSlice.actions;

export default progressSlice.reducer;