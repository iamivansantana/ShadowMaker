import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';


const NavBar = ({ history }) => {
    

    return (
        <>
        <div className="navbar-fixed-Shadow">
            <nav className="navbar-Shadow">   
                <div className="navbar-left-Shadow">
                    
                        <Link to="/" className="" style={{textDecoration:'none'}}>
                            <i className="fa fa-home icon-Shadow"></i>
                        </Link>
                </div>

                <div className="navbar-center-Shadow">
                    <div >
                        <Link to="/"><img src="/assets/buhuhuwhite3.png" className="logo-Shadow img-Shadow" alt="LogoPortadaBuhuhu" /></Link>
                    </div>
                </div>

                <div className="navbar-right-Shadow" >
                    <div style={{position:'absolute',right:'5px'}}>
                        <Link to="/">
                            <i className="fa fa-search icon-Shadow"></i>
                        </Link>
                        
                    </div>
                </div>

            </nav>
        </div>  
        </>
    )
}

export default NavBar
