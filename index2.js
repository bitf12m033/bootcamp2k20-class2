// Promises

console.log("Before prepare food")

function prepareFood() {

    let promise = new Promise(function(resolve, reject) {

        setTimeout(() => {
            console.log("prepare food");
            resolve("Food is ready"); //on success

        }, 20)
    });

    return promise;
}

function prepareToast() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {

            console.log("prepare prepareToast");
            resolve("prepareToast is ready");
        }, 20)
    });
    return promise;
}



let promise = prepareFood();
promise.then(function(value) {
        console.log("value", value);
        return prepareToast(); //return promise
    })
    .then(function(toast) {
        console.log("toast", toast);
    })
    .catch(function(error) {
        console.log(error);
    });
// console.log(promise);

console.log("After prepare food");