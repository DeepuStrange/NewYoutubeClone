import { useCallback, useEffect } from "react";
import Home from "./Containers/Home";
import axios from "axios";
import { getVideos } from "./Slice/YoutubeSlice";
import { useDispatch } from "react-redux";
import "./Css/App.css"
import SelectedVid from "./Containers/SelectedVid";
function App(props){
  const dispatch = useDispatch();
  const fetchData = useCallback(async(term)=>{
    const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCDWrmPioXtvwNksSZR8IOS1RCtpQ8nCm4&q=${term}&type=video&maxResults=30`);
    console.log(data.items,"data")
    dispatch(getVideos(data.items))
  },[dispatch]);
  useEffect(()=>{
    fetchData('you are there for me')
  },[fetchData])
  return(
    <div>
      <h1 style={{textAlign:"center"}}>YouTube CLone....!</h1>
      <Home onSearch={(term)=>{
        fetchData(term)
      }}></Home>
      <h1 style={{
        alignItems:"center"
      }}>When you Select or click on the specific video the video will be played Here And List Of that channel videos will be displayed</h1>
      <div>
      <SelectedVid></SelectedVid>
      </div>
    </div>
  )
}
export default App;