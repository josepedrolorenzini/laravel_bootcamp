const calculateSum = (num1:number, num2:number):number =>{
    return num1 + num2;
}

console.log(calculateSum(2,2))  



const sayHello = (name?:string):string =>{
    if(name){

        return `Hello, ${name || 'World'}`;
    }else{
        return 'Hello, World';
    }
    
}

console.log(sayHello())  // Output: Hello, World
console.log(sayHello().length) // Output: Hello, World 
console.log(sayHello('John Doe'))  // Output: Hello, John Doe



const apiCall = async (url:string,method:any):Promise<any> =>{
    try{
        const response = await fetch(url,{method});
        return await response.json();
    } catch(error){
        console.error('Error:', error);
        return false;
    }
}

apiCall('https://api.github.com/', 'GET').then(response => console.log(response))

