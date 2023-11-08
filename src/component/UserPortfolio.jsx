/* eslint-disable no-unused-vars */
import React from 'react'

const Portfolio = () => { 
    const user ={
        fname:"Sandra",
        lname:"Opare-Twum",
        education:"University Degree",
        profession:"Realtor/Ecommerce Business Owner ",
        skills:["Team Management,", " Negotiation,"," Book keeping."]


    }
  return (
   <>
   <h1>{user.fname} {user.lname}</h1>
   <div className='h3tag'>
   <h3>Education:{user.education}</h3>
   <h3>Profession: {user.profession}</h3>
   <h3>Skills:{user.skills}</h3>
   </div>
  
   </>
  )
}

export default Portfolio