function sayMyName() {
    console.log("r");
    console.log("o");
    console.log("b");
    console.log("i");
    console.log("n");
}
//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
     // let result = number1 + number2
    // return result
    return number1 + number2
}
const ans = addTwoNumber(11, 41);
//console.log(ans);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} is just logged in`;
}
//console.log(loginUserMessage("robin"));
//console.log(loginUserMessage());


function CalculateCartPrice(val1, val2, ...num1) {
    return num1
}

//console.log(CalculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "robin",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

  