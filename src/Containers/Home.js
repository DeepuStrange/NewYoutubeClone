import { useState } from 'react';
import './Home.css'
import SideBar from './SideBar';
function Home(props){
    const [search,setSearch]=useState({
        term:""
    })
    return(
        <div>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            {/* NavBar */}
            <div className="navBar">
                {/* youtubeIcon */}
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:'10px',
                    flexWrap:"wrap",

                }} className='Hover'>
                <i className="fa fa-youtube-play" style={{fontSize:30,color:"red",}}></i>
                <i style={{
                font:"caption",
                fontWeight:"bold",
                height:"100%",
                }}>YouTube</i>
                </div>
                {/* Mic and searchBar */}
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    {/* SearchBar */}
                <div style={{
                    display:"flex",
                    flexWrap:"wrap",
                    flexDirection:"row",
                    alignItems:"center",
                    width:"65%"
                }}>
                <input onChange={(event)=>{
                    setSearch({
                        ...search,
                        term : event.target.value
                    })
                }} className="searchBar" id='search' type="text" placeholder="Search"></input>
                <button onClick={(event)=>{
                    event.preventDefault();
                    props.onSearch(search.term);
                    document.getElementById('search').value = "";
                }}  className='btn-search'><i className="fa fa-search" style={{color:"white", fontSize:25,backgroundColor:"#333"}}></i></button>
                </div>
                {/* Mic */}
                <div>
                <i className="fa fa-microphone" style={{
                    fontSize:18,
                    backgroundColor:"#333",
                    padding:"8px",
                    borderRadius:"50%"}}></i>
                </div>
                </div>
                {/* video and ring bell */}
                <div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:'center',
                        flexWrap:"wrap",
                        gap:'20px'
                    }}>
                    <i className="fa fa-video-camera"></i>
                    <i className="fa fa-bell"></i>
                    </div>
                </div>
            </div>
            <SideBar></SideBar>
        </div>
    )
}
export default Home;