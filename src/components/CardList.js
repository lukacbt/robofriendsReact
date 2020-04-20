import React from "react"
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map( (user, i) => {
          return (
            <Card 
              id={user.id} 
              key={user.id}
              name={user.name} 
              email={user.email} 
           />
          )
        })
      }
    </div>
  ) 
}

export default CardList