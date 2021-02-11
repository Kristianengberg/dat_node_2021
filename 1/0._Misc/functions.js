function myFirstFunction() {
    return "Greeting";
}

console.log(myFirstFunction());

const hiFunction = () => {
    console.log("hi");
};

const helloFunction = () => {
    console.log("hello");
};

function sayHiLater(anyFunctionReference) {

    anyFunctionReference();
}

sayHiLater(hiFunction);

sayHiLater(helloFunction);

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));

}

const someFunction = (name) => {
    return "Poke " + name;
};

interact(someFunction, "kristian");

const lickFunction = (name) => {
    return "lick " + name;
};

interact(lickFunction, "kristian");

interact((name) => "lick " + name, "Kristian");