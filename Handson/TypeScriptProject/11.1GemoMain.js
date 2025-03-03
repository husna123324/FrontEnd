/// <reference path="11Calculatorarea.ts" />
var area = Geometry.calculateArea(5);
console.log("Area of the circle: ".concat(area.toFixed(2)));
// tsc --outFile output.js geometry.ts main.ts
// node output.js