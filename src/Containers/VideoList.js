import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedVid,selectedVideo } from "../Slice/YoutubeSlice";
import "./Home.css"
function VideoList(){
    const dispatch = useDispatch();
    let {videos} = useSelector((appstate)=>appstate);
    let fetchSelected = useCallback(async(term)=>{
        const {data} =await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBXSu1l4ms7BtcTDju71hBTiLm7JEZdQq4&q=you are there for me&type=video&maxResults=10&channelId=${term}`);
        dispatch(SelectedVid(data.items))
    },[dispatch])
    return(
        <div  style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "auto",
        }}>
            {videos.length > 0 ? (
                videos.map((vid)=>(
                    <div key={vid.etag} 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 10,
                        width: "30%",
                        marginTop: 10,
                        gap: 10,
                    }}>
                        <img src={vid.snippet.thumbnails.high.url} alt="video Img" style={{
                            objectFit:"cover",
                            width:"auto"
                        }} onClick={()=>{
                            fetchSelected(vid.snippet.channelId);
                            dispatch(selectedVideo(vid))
                        }}></img>
                        <span>{vid.snippet.title}</span>
                    </div>
                ))
            ) : (
                <div>
                    <h1>Loading.......!</h1>
                </div>
            )}
        </div>
    )
}
export default VideoList;