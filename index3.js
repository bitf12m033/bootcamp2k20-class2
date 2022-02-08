// Async await

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



async function startProcess() {
    let food = await prepareFood();
    console.log(food);
    let toast = await prepareToast();
    console.log(toast);

}
startProcess();
console.log("After prepare food");