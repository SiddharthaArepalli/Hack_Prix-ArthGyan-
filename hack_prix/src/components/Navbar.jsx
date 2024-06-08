import {useEffect, useState} from "react"
import '../styling/Navbar.css'
// useEffect(() => {
//     return () => {
      

//     };
//   }, []);
  
    function Navbar() {
       
        return (<>
            <div className="page-1">
                <div className="header">
                    <div className="logo">
                        
                    </div>
                    <nav>
                        <li className="link"><a href="/home"  className="link-home">Home</a></li>
                        <li className="link"><a href="/trends" className="link-trends">Trends</a></li>
                        <li className="link"><a href="/tools" className="link-tools">Tools</a></li>
                        <li className="link"><a href="/blogs" className="link-blogs">Blogs</a></li>
                        <li className="link"><a href="/finbot" >FinBot</a></li>
                    </nav>
                    <div className="btn">
                        <button className="btn-1">REGISTER</button>
                        <button className="btn-2">SIGN UP</button>
                    </div>
                </div>
            </div>
        </>)
    }
export default Navbar;