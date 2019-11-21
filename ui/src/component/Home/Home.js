import React from 'react';
import feat1 from "./feat1.jpg";
import feat2 from "./feat2.jpg";
import feat3 from "./feat3.jpg";
import feat4 from "./feat4.jpg";
import "../Home/Home.css";



const Home = () => {
    return(

       
         <div className='content'>
         
   
<table className='feature'>

            <tr> 
                <td>< img className='feat' src={feat1} alt='hi'/></td>
                <td>< h6 className='description'>Graphical Network Visualization</h6>
                <p className='description'>to visualize connection between nodes easily</p></td>

                <td><img className='feat'src={feat2}  alt='hi'/></td>
                <td>< h6 className='description'>Suspicious Claims Alert</h6>
                <p className='description'>Helps to identify which claims need further investigation</p></td>

             </tr>
             <tr> 
             <td><img className='feat' src={feat3}  alt='hi'/></td>
             <td> < h6 className='description'>Claims Management</h6>
             <p className='description'>Display all the claims with their details and with sorting feature </p></td>


             <td> <img className='feat' src={feat4}  alt='hi'/></td>
             <td> < h6 className='description'>Cases Management</h6>
             <p className='description'>Cases can be creates for alerts that need further investigation</p></td>

             </tr>
             </table>

        
           
        </div>
        
    )
}

export default Home;