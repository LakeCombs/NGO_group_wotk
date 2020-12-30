import React from 'react';
import './App.css'


function Benefit() {
  return (
    <center>
      <div className="VContainer">
         <div className="HeaderTags"> 
          <h2 className="our">OUR </h2> 
          <h2 className="volonteer">VOLUNTEERS</h2>
         </div>
         <div className ='Top'>
          <div className="imageHOlder">
            <div className="ImageBox">
              <img alt="image" className="Image"/>
              <p>Name </p>
            </div>

            <div className="ImageBox">
              <img  className="Image"/>
              <p>Name </p>
            </div>
            <div className="ImageBox">
              <img  className="Image"/>
              <p>Name </p>
            </div>

            <div className="ImageBox">
              <img  className="Image"/>
              <p>Name </p>
            </div>
          </div>
        </div>
         <div className="below">
          <div className='everythingDown'>
            <div className="lastSide">
                <div className="BecomeaV">
                  <h2>Become a volunteers</h2>
                  <h5>thie ewoffn bjnow neoforojr knoinwowrr nonowr</h5>
                </div>
                <h4 className="personal">personal information</h4>

            </div>

              <form className='form'>
          
                <input placeholder="Enter Name" className="Input"/>
                <input placeholder="Enter Email" className="Input" />
                <input placeholder="Sex" className="Input" />
              </form>

              <input placeholder="write a message"  className='writeMessage'/>
              <div className="lastDetails">
                <h3 className="cv">C/V Upload</h3>
                <input type="file" placeholder="No File Choosen" className="ChooseFile"/>
              </div>
            
            <div className="footer">
              <button className="Button">
                Apply Now
              </button>
            </div>

          </div>
        </div>

        
     </div>
       

    </center>
  );
}

export default Benefit;
