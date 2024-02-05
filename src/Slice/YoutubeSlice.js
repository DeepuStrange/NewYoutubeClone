import { createSlice } from "@reduxjs/toolkit";
const YoutubeSlice = createSlice({
    name:"youtubeClone",
    initialState:{
        videos:[],
        term:'',
        SelectedVid:[],
        SelectedVideo:[],
    },
    reducers:{
        getVideos:(state,param)=>{
            const {payload} = param
            state.videos = [...payload]
        },
        SelectedVid:(state,param)=>{
            const {payload} = param
            state.SelectedVid =[...payload]
        },
        selectedVideo:(state,param)=>{
            const {payload} = param;
            state.SelectedVideo = [payload];
        }
    }
})
export default YoutubeSlice.reducer;
export const {getVideos,SelectedVid,selectedVideo} = YoutubeSlice.actions;