import { useDispatch, useSelector } from "react-redux";
import { selectedVideo } from "../Slice/YoutubeSlice";

function SelectedVid(){
    const {SelectedVid,SelectedVideo} = useSelector((appstate)=>appstate)
    const dispatch = useDispatch();
    console.log(SelectedVideo,SelectedVid) 
    if(SelectedVideo.length > 0){
        const url = `https://www.youtube.com/embed/${SelectedVideo[0].id.videoId}`
        return(
            <div className="SelectVid">
                <iframe width="560" height="315" src={url}title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <div>
                    {
                        SelectedVid.length > 0 ? (SelectedVid.map((vid)=>(
                            <div className="select" key={vid.etag}>
                                <img id="img" src={vid.snippet.thumbnails.high.url} alt="png" onClick={()=>{
                                    dispatch(selectedVideo(vid))
                                }}></img>
                                <p>{vid.snippet.title}</p>
                            </div>
                        ))) : (<div>
                            <h1>Loading....!</h1>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}
export default SelectedVid;