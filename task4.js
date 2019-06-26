//single promise case

async function addWithDelay(...params) {
    return new Promise((resolve, reject) => {
        const someTimeout = setTimeout(() => reject(`not Complete in 1 second`), 1000);
        const reducer = (accumulator, currentValue) => {
            return (currentValue < 0) ? reject(`Error! Some parameter is a negative number!`) : accumulator + currentValue;
        }
        resolve(params.reduce(reducer, 0));
    });
}

// exact match to the task description case

async function addWithDelayExact(...params) {
    if (params.some((parameter) => parameter < 0)) return Promise.reject("Error! Some parameter is a negative number!")
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(`not Complete in 1 second`), 1000);
        const reducer = (accumulator, currentValue) => {
            return accumulator + currentValue;
        }
        resolve(params.reduce(reducer, 0));
    });

}
