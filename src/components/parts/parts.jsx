import React from "react";
import CarDetail from "../car_detail/car_detail";

const Parts = ({cars}) =>{
  return(
    <>
      {cars.map(car => {
        return <CarDetail key={car.id} car={car}/>
      })}
    </>
  )
}

export default Parts;