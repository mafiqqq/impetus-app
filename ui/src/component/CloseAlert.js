import React from "react";
import Popup from "reactjs-popup";
import "./closeAlert.css";


const CloseAlert = () => {
  return (
      <Popup offsetx="0" trigger={<button className="closeAlert" >Close Alert</button>} modal>
          {close => (
              <div className="modal">
                  <a className="close" onClick={close}>
                      &times;
          </a>
                  <div className="header">
                  Alert </div>
                  <div className="dialogue">
                      <p className="confirmation">Are you sure you want to remove this claim from alerts list?</p>
          </div>
                  <div className="actions">

                      <button   className="button-green" onClick={() => {close();}}>Yes </button>
                      <button className="button-red" onClick={() => {close();}}>Cancel </button>
                  </div>
              </div>
          )}
      </Popup>
  );
}
export default CloseAlert