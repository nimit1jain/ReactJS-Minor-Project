import React from 'react'
import Products from './Products'
import "./home.css";
function Home() {
    return (
        <>
         <div className="showcase">
        <img class="video-feature--mobile-img" src="https://thumbs.dreamstime.com/z/web-design-background-pattern-vector-color-illustration-70776238.jpg" alt="Aerial view of campus" />
        <div className="para"> 
        <h1 className="pheading">Learn Designing with AmeWeb</h1> </div>
            {/* <img class="video-feature--mobile-img" src="https://www.oberlin.edu/sites/default/files/styles/width_1600/public/content/home/header-video-cover-image/aerial-campus-wbradford-40.jpg?itok=OPGqFteY" alt="Aerial view of campus" />
            <div className="para"> 
                <h1 className="pheading">Student Council Welfare </h1> 
            </div> */}
        </div>
  
    
    
   
<Products/>
    </>
    )
}

export default Home



