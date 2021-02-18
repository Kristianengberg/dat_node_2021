let variableA;
let variableB;

console.log(variableA + variableB);
console.log(variableA, variableB);

const myObject = {
    attribute: "value"
};


{
    let scopedVariable = "abc";

    {


        scopedVariable = 123;


    }

    console.log(scopedVariable);
}

{
    let scopedVariable = "abc";
}