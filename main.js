var allPromises = [], min = 0, max = 1000;

function calc(i, res, rej) {
    var timeout = Math.floor(Math.random() * (max - min)) + min;
    setTimeout(() => {
        res(2 * i);
    }, timeout);
}

for (var i = 0; i < 10; i++) {
    var promise = new Promise((res, rej) => {
        calc(i, res, rej);
    });
    allPromises.push(promise);
}

Promise.all(allPromises).then(numbersOf => {
    numbersOf.forEach(number => {
        console.log(number);
    });
});