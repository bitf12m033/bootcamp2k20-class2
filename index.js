console.log("Before prepare food")

function prepareFood(callback) {
    setTimeout(() => {

        console.log("prepare food");
        callback("Food is ready");
    }, 20)
}

function prepareToast(callback) {
    setTimeout(() => {

        console.log("prepare prepareToast");
        callback("prepareToast is ready");
    }, 20)
}

// prepareFood();

function mycallback(value) {
    console.log("Value =", value);
    prepareToast(toastcallback);
}

function toastcallback(value) {
    console.log("Value =", value)
}

prepareFood(mycallback);
// prepareFood((value) => {
//     console.log("Value =", value)
// })

//callback => send function as param to function

console.log("After prepare food");