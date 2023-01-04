const stack = [];

//Push
stack.push(1);
stack.push(2);
stack.push(3);
console.log("push : ",stack);

//Pop
stack.pop();
console.log("pop : ", stack);

//Get Top
console.log(stack[stack.length - 1]);