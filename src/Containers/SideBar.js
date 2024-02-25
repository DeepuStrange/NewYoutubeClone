import { useSelector } from "react-redux";
import "./Home.css"
import VideoList from "./VideoList";
import SelectedVid from "./SelectedVid";
function SideBar(){
    let {displayHome} = useSelector((appState)=>appState)
    return(
        <div style={{
            display:"grid",
            gridTemplateColumns:"21% auto"
        }}>
            <div style={{
            marginTop:"20px",
            display:"flex",
            flexDirection:"column",
            gap:"25px",
            padding:"10px"
        }}>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> 
            {/* Home */}
            <div  style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    gap:"30px",
                 }} id='hoveri'>
                <i className="fa fa-home"></i>
                <i>Home</i>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    gap:"30px",
                }} id='hoveri'>
                <i className="fa fa-play-circle-o"></i>
                <i>Shorts</i>
                </div>
                {/* Subcription */}
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    gap:"25px"
                }}>
                <i className="material-icons" style={{fontSize:"18px"}}>subscriptions</i>
                <i>subscriptions</i>
                </div>
                <div>
                <hr></hr>
                </div>
                {/* you */}
                <div className='you'>
                <i>You</i>
                <i className="fa fa-angle-right" style={{fontSize:"15px"}}></i>
                </div>
                <div className='you'>
                <i className="fa fa-user-circle-o"></i>
                <i>Your channel</i>
                </div>
                <div className='you'>
                <i className="fa fa-history"></i>
                <i>History</i>
                </div>
                <div className='you'>
                <i className="fa fa-caret-square-o-right"></i>
                <i>Your Videos</i>
                </div>
                <div className='you'>
                <i className="fa fa-clock-o"></i>
                    <i>Watch Later</i>
                </div>
                <div className='you'>
                <i className="fa fa-thumbs-up"></i>
                 <i>Liked Videos</i>   
                </div>
        </div>
        {
            displayHome === true ? (<VideoList></VideoList>) :(<SelectedVid></SelectedVid>)
        }
        </div>
    )
}
export default SideBar;