/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from 'react'; 


export default function Button ({ label }) {
  
  return (
    <button className="custom-button" 
    
        style={{
            backgroundColor: "#355E3B",
            color: "#fff",
            padding: "10px 20px", 
            fontSize: "16px", 
            border: "1px solid #00A36C",
            borderRadius: "5px", 
            cursor: "pointer",
            margin: "5px", 
          }}
    >
      {label}
    </button>
  );
}



  



