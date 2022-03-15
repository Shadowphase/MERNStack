import React from "react";

let Cars = (props)=>{
    const cars=props.cars;
    return (
        <>
            <h2>Cars</h2>
            <p>{cars.car1}</p>
            <p>{cars.car2}</p>
            <p>{cars.car3}</p>
        </>
    );
}

export default Cars;