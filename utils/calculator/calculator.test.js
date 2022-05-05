import { add, subtract, multiply, divide } from "./calculator";

it("Add two numbers", ()=>{
    expect(add(1, 3)).toEqual(4)
})

it("Add two strings", ()=>{
    expect(add("1", "4")).toEqual(5)
})

it("Multiply two numbers", ()=>{
    expect(multiply(1, 3)).toEqual(3)
})

it("Multiply two strings", ()=>{
    expect(multiply("1", "4")).toEqual(4)
})

it("Subtract two numbers", ()=>{   
    expect(subtract(4, 2)).toEqual(2); 
})

it("Subtract two strings", () =>{
    expect(subtract("-5", "3")).toEqual(-8);
})

it("Subtract two numbers", ()=>{   
    expect(subtract(4, 2)).toEqual(2); 
})

it("Subtract two strings", () =>{
    expect(subtract("-5", "3")).toEqual(-8);
})

it("Divide two numbers", ()=>{
    expect(divide(6, 2)).toEqual(3);
})

it("Divide two strings", ()=>{
    expect(divide("4", "2")).toEqual(2);
})

it("Divide by zero", ()=>{
    expect(divide(5, 0)).toEqual(new Error("Cannot divide by zero"));
})

