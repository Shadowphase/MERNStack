import React, { useState, useCallback, useMemo } from "react";
import Count from "./Count";
import Title from "./Title";
import Button from "./Button";

function Hook(props){
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
        <Button clcik={incrementAge}>Increment Age</Button>

        <Count text={"Salary: "} count={salary} />
        <Button click={incrementSalary}>Increment Salary</Button>
        </>
    )
}

export default Hook;