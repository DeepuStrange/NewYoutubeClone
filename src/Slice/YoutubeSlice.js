import { createSlice } from "@reduxjs/toolkit";
const YoutubeSlice = createSlice({
    name:"youtubeClone",
    initialState:{
        videos:[],
        term:'',
        SelectedVid:[],
        SelectedVideo:[],
        displayHome:true,
        displaySelectedVidList :false,
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
        },
        displayHomeState :(state,param)=>{
            const {payload} = param;
            state.displayHome = payload
        },
        displaySelectedVidListState :(state,param)=>{
            const {payload} = param
            state.displaySelectedVidList = payload
        }
    }
})
export default YoutubeSlice.reducer;
export const {getVideos,SelectedVid,selectedVideo,displayHomeState,displaySelectedVidListState} = YoutubeSlice.actions;