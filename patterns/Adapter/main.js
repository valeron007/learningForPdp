import {CalculatorAdapter} from "./calculatoradapter.js"
import {Calculator} from './calculator.js';

const calcAdapter = new CalculatorAdapter();
const sumAdapter = calcAdapter.operation(2, 2, "multiplication");
console.log(sumAdapter);

// А новый функционал используем от экземпляра класса нового калькулятора
const calculator = new Calculator();
const sum = calculator.mult(2, 2);
console.log(sum);