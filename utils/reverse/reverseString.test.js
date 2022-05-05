import { reverseString } from "./reverseString";

it("Reverse string", ()=>{
    expect(reverseString("Hello")).toEqual("olleH")
})

it("Reverse string with numbers", ()=>{
    expect(reverseString("H3ll0")).toEqual("0ll3H")
})

