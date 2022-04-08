import React, { useState, useCallback, useMemo } from "react";
import Count from "./Count";
import Title from "./Title";
import Button from "./Button";

function Hooks(props){
    let [age, updateAge] = useState(42);
    let incrementAge = useCallback(()=>{
        ++age;
        updateAge(age);
    },[age]);

    let [salary, updateSalary] = useState(16000);
    let incrementSalary = useCallback(()=>{
        salary+=20;
        updateSalary(salary);
    },[salary]);

    let isEven = useMemo(()=>{
        return age%2===0;
    },[age]);

    return (
        <>
        <Title/>
        <Count text={"Age: "} count={age} />
        <Button click={incrementAge}>Increment Age</Button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
        <Count text={"Salary: "} count={salary} />
        <Button click={incrementSalary}>Increment Salary</Button>
        </>
    );
}

export default Hooks;