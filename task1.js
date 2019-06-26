function fillTheArray(array) {
    if (Array.isArray(array)) {
        let index = 0;
        while (index < 10) {
            array[index] = Math.round(Math.random() * 101);
            index++;
        }
        return array;
    }
    else throw new Error("wrong argument type")
}

function multiplyGreatest(array) {
    const newArray = array.sort((a, b) => a > b);
    const reducer = (accumulator, currentValue, index, currentArray) => {
        return (index < currentArray.length - 3) ? accumulator : Math.imul(accumulator, currentValue);
    };
    return newArray.reduce(reducer,1);
}
