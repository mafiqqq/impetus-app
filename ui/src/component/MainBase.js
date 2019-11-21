import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./mainBase.css";


class MainBase extends Component {

    render() {
        return(
    
            <nav className='MainBase'>
          
                
                <ul className='navBar'>
                    
                    <h3 className='impetus'>IMPETUS</h3>
                    <div className='tagline'>
                    <h5>Automobile Insurance Fraud </h5>
                    <h5>Detection and Analysis System</h5>
                    </div>
                    <div className='navLinks'>
                    <Link to='/Search'>
                    <li className='link'><p>SEARCH</p></li>
                    </Link>
                    <Link to='/CaseList'>
                    <li className='link'><p>CASES</p></li>
                    </Link>
                    <Link to='/AlertList'>
                    <li className='link'><p>ALERTS</p></li>
                    </Link>
                    <Link to='/ClaimList'>
                    <li className='link'><p>CLAIMS</p></li>
                    </Link>
                    <Link to='/'>
                    <li className='link'><p>HOME</p></li>
                    </Link>
                    
                   
                    </div>
                  
                    
                   
                </ul>
               
               
               
            </nav>
        )
    }
    // MainBase = () => {
        
    // }


}




export default MainBase;