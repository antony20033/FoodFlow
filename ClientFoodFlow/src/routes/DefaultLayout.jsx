import React from "react";
// ../components/index.js
import AppSidebar  from "../components/Sidebar";
//import { AppSidebar } from "../components/Sidebar";
const DefaultLayout = () =>{
    return(
        <div>  
            <AppSidebar/>  
            <div className="wrapper d-flex flex-column min-vh-100">
               <h1>BODY</h1> 
                <div className="body flex-grow-1">
                </div>

<h1>Footer</h1>
            </div>
        </div>
    )
}
export default DefaultLayout