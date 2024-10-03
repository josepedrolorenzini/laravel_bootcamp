"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const calculateSum = (num1, num2) => {
    return num1 + num2;
};
console.log(calculateSum(2, 2));
const sayHello = (name) => {
    if (name) {
        return `Hello, ${name || 'World'}`;
    }
    else {
        return 'Hello, World';
    }
};
console.log(sayHello()); // Output: Hello, World
console.log(sayHello().length); // Output: Hello, World 
console.log(sayHello('John Doe')); // Output: Hello, John Doe
const apiCall = (url, method) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, { method });
        return yield response.json();
    }
    catch (error) {
        console.error('Error:', error);
        return false;
    }
});
apiCall('https://api.github.com/', 'GET').then(response => console.log(response));
