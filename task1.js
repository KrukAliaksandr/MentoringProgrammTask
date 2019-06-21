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
    array.sort((a, b) => a > b);
    console.log(array);
}
multiplyGreatest(fillTheArray([]));
