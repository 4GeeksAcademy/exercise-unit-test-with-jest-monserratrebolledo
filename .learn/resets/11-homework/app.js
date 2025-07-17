// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEur = valueInDollar / 1.07
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}
const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

module.exports= {sum, fromEuroToDollar};

let oneEurols = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP":0.87
}

