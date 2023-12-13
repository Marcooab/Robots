import React from 'react'
import Card from '../Card/Card'

const CardList = ({ robots }) => { 

return(
  <div>
    {robots.map((user, i) => {
    return (
      <Card 
      id={robots[i].id} 
      name={robots[i].name} 
      email={robots[i].email} 
      pic="https://robohash.org/test?200x200" 
      key={i} 
    />)})}
  </div>
)} 


export default CardList